import {Sequelize} from "sequelize";

const db = new Sequelize('invitation', 'andir', 'Andi1010.', {
  host: '0.0.0.0',
  dialect: 'mysql'
});

export default db;
