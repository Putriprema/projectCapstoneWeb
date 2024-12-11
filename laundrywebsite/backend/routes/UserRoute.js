import express from "express";
import {
    getUsers, 
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js"; // Pastikan nama fungsi sesuai

const router = express.Router();

// Panggil fungsi getUser, bukan getUsers
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
// Rute POST untuk menambahkan user
router.post('/users', createUser);
// Rute update untuk update user
router.patch('/users/:id', updateUser); 
// Rute delete untuk hapus user
router.delete('/users/:id', deleteUser);

export default router;
