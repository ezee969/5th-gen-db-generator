// remover anys

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
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
const sequelize = require('../db-connection');

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
  console.log(DataTypes);
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

export const POST = async (_req: NextApiRequest, _res: NextApiResponse) => {
  try {
    const dbData = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'db.json'), 'utf8')
    );

    defineModels(dbData);

    return NextResponse.json({
      status: 200,
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({
      status: 500,
    });
  }
};
