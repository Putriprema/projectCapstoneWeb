import { Sequelize } from "sequelize"; // Memperbaiki import DataTypes
import db from "../config/database.js";  // Pastikan Anda mengimport database yang benar

const { DataTypes } = Sequelize;

// Mendefinisikan model User
const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,  // Gunakan INTEGER atau BIGINT jika ID besar
        primaryKey: true, // Menandakan sebagai primary key
        autoIncrement: true, // ID akan bertambah otomatis (berurutan)        
    },
    order_id: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    total: {
        type: DataTypes.STRING,  // Menggunakan DECIMAL untuk harga dengan dua tempat desimal
    },
    
    address: {
        type: DataTypes.STRING,
    },
    courier: {
        type: DataTypes.STRING,
    },
    transactionDate: {
        type: DataTypes.STRING,  // Menggunakan DATE untuk tanggal
    },
    orderTime: {
        type: DataTypes.STRING,  // Menggunakan TIME untuk jam
        allowNull: false,      // Pastikan ini sesuai dengan logika aplikasi Anda
    },
    estimatedCompletionTime: {
        type: DataTypes.STRING,  // Menggunakan TIME untuk jam selesai laundry
    },
}, {
    freezeTableName: true,  // Menjaga nama tabel tetap konsisten dengan nama model
});

// Fungsi untuk sinkronisasi database
const syncDatabase = async () => {
    try {
        // Sinkronisasi dengan opsi force: false di production atau development
        await db.sync({ force: false });  // Jangan gunakan force: true di production
        console.log('Database sinkronisasi berhasil!');
    } catch (error) {
        console.error('Gagal sinkronisasi database:', error);
    }
};

// Mengekspor model
export default User;

// Panggil fungsi sinkronisasi setelah definisi model
syncDatabase();
