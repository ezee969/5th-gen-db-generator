import { Sequelize } from 'sequelize';
const pg = require('pg');

const sequelize = new Sequelize(
  'postgres://root:root@localhost:5433/efi_next',
  {
    dialectModule: pg,
    logging: console.log,
  }
);

export default sequelize;
