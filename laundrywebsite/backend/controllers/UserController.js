import { response } from "express";
import User from "../models/UserModels.js";

// Mendapatkan semua users
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Server Error" });
    }
};

// Mendapatkan user berdasarkan ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id,
            }
        });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Server Error" });
    }
};

// Membuat user baru
export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ msg: "User Created", user });
    } catch (error) {
        console.log("Error creating user:", error.message);
        res.status(500).json({ msg: "Server Error" });
    }
};


// Mengupdate user berdasarkan ID
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        }); 
            res.status(200).json({msg:"user update"});
    }catch (error){
        console.log(error.message);
    }
   
};

// Menghapus user berdasarkan ID
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        }); 
            res.status(200).json({msg:"user deleted"});
    }catch (error){
        console.log(error.message);
    }
   
};
