import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Guest = db.define('guests', {
  nama: DataTypes.STRING, 
  hubungan: DataTypes.STRING, 
  kehadiran: DataTypes.STRING, 
  ucapan: DataTypes.STRING}, 
  {freezeTableName: true})

export default Guest;

(async () => {
  await db.sync();  
})();
