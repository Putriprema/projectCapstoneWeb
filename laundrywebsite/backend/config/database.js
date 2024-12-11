import Sequelize from "sequelize";

const db = new Sequelize('transaksi_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;