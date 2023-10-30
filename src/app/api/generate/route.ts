import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import sequelize from '../../../../db';
import { DataTypes } from 'sequelize';

function generateFieldsCode(fields) {
  return fields
    .map((field) => {
      return `${field.fieldName}: {
            type: DataTypes.${field.fieldType},
            allowNull: ${!field.notNull},
            unique: ${field.unique},
            primaryKey: ${field.primaryKey}
        }`;
    })
    .join(',\n    ');
}

function generateRelationshipsCode(relationship) {
  if (!relationship) return '';
  const { type, targetModel } = relationship;
  switch (type) {
    case 'hasOne':
      return `${targetModel}.hasOne(models.${targetModel});\n`;
    case 'belongsTo':
      return `${targetModel}.belongsTo(models.${targetModel});\n`;
    case 'hasMany':
      return `${targetModel}.hasMany(models.${targetModel});\n`;
    case 'belongsToMany':
      return `${targetModel}.belongsToMany(models.${targetModel}, { through: 'ModelName_TargetModel' });\n`;
    default:
      return '';
  }
}

function generateModelFileContent(modelName, fields, relationship) {
  const fieldsCode = generateFieldsCode(fields);
  const relationshipsCode = generateRelationshipsCode(relationship);

  return `
const { DataTypes, Model } = require('sequelize');
import sequelize from '../db';

class ${modelName} extends Model {}

${modelName}.init({
    ${fieldsCode}
}, {
    sequelize,
    modelName: '${modelName}',
    timestamps: false
});

${modelName}.associate = function(models) {
    ${relationshipsCode}
};

module.exports = ${modelName};
`;
}

const defineModels = (dbData) => {
  const modelsDir = path.join(process.cwd(), 'models');
  if (!fs.existsSync(modelsDir)) {
    fs.mkdirSync(modelsDir);
  }

  dbData.models.forEach((model) => {
    const modelContent = generateModelFileContent(
      model.modelName,
      model.fields,
      model.relationships
    );
    const modelFilePath = path.join(modelsDir, `${model.modelName}.js`);
    fs.writeFileSync(modelFilePath, modelContent);
  });
};

function getModelAttributes(fields) {
  const modelAttributes = {};
  fields.forEach((field) => {
    modelAttributes[field.fieldName] = {
      type: DataTypes[field.fieldType],
      allowNull: !field.notNull,
      primaryKey: field.primaryKey,
    };
  });
  return modelAttributes;
}

function defineSequelizeModels(dbData) {
  const models = dbData.models.map((model) => {
    const modelAttributes = getModelAttributes(model.fields);
    const sequelizeModel = sequelize.define(model.modelName, modelAttributes);
    if (model.relationships) {
      const { type, targetModel } = model.relationships;
      switch (type) {
        case 'hasOne':
          sequelizeModel.hasOne(sequelize.models[targetModel]);
          break;
        case 'belongsTo':
          sequelizeModel.belongsTo(sequelize.models[targetModel]);
          break;
        case 'hasMany':
          sequelizeModel.hasMany(sequelize.models[targetModel]);
          break;
        case 'belongsToMany':
          sequelizeModel.belongsToMany(sequelize.models[targetModel], {
            through: `${model.modelName}_${targetModel}`,
          });
          break;
      }
    }
    return sequelizeModel;
  });

  models.forEach((model) => {
    if (model.associate) {
      model.associate(sequelize.models);
    }
  });
}

export const POST = async (_req, _res) => {
  try {
    const dbData = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'db.json'), 'utf8')
    );
    defineModels(dbData);
    defineSequelizeModels(dbData);
    await sequelize.sync({ force: true });
    return NextResponse.json({ message: 'Migraciones exitosas' });
  } catch (error) {
    console.error('Error al generar migraciones:', error);
    return NextResponse.json({ error: 'Error al generar migraciones' });
  }
};
