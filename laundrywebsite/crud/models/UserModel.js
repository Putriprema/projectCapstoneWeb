import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    idOrder: DataTypes.STRING,
    name: DataTypes.STRING,
    service: DataTypes.STRING,
    harga: DataTypes.STRING,
    durasi: DataTypes.STRING
}, {
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();