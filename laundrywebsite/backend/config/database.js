import Sequelize from "sequelize";

const db = new Sequelize('kelompok2','kelompok2','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;