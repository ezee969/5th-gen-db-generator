import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import sequelize from '../../../../db';
import { DataTypes } from 'sequelize';

function generateModelFileContent(modelName: any, fields: any) {
  const fieldsCode = fields
    .map((field: any) => {
      return `${field.fieldName}: {
            type: DataTypes.${field.fieldType},
            allowNull: ${!field.notNull},
            unique: ${field.unique},
            primaryKey: ${field.primaryKey}
        }`;
    })
    .join(',\n    ');

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

module.exports = ${modelName};
`;
}

const defineModels = (dbData: any) => {
  const modelsDir = path.join(process.cwd(), 'models');
  if (!fs.existsSync(modelsDir)) {
    fs.mkdirSync(modelsDir);
  }

  dbData.models.forEach((model: any) => {
    const modelContent = generateModelFileContent(
      model.modelName,
      model.fields
    );
    const modelFilePath = path.join(modelsDir, `${model.modelName}.js`);
    fs.writeFileSync(modelFilePath, modelContent);
  });
};

function getModelAttributes(fields: any) {
  const modelAttributes: any = {};
  fields.forEach((field: any) => {
    modelAttributes[field.fieldName] = {
      type: DataTypes[field.fieldType],
      allowNull: !field.notNull,
      primaryKey: field.primaryKey,
    };
  });
  return modelAttributes;
}

function defineSequelizeModels(dbData: any) {
  dbData.models.forEach((model: any) => {
    const modelAttributes = getModelAttributes(model.fields);
    sequelize.define(model.modelName, modelAttributes);
  });
}

export const POST = async (_req: NextApiRequest, _res: NextApiResponse) => {
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
