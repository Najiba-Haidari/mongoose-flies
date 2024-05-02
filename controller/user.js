import express from "express";
import User from "../models/user.js";
// import mongoose from "mongoose";

async function getAllUsers(req, res) {
    // res.send("allusers")
    try {
        let result = await User.find().limit(10).exec();
        // console.log(result)
        res.send(result)
    } catch (error) {
        res.send("Invalid Result").status(400);
    }
}

async function getOneUser(req, res) {
    // res.send("allusers")
    try {
        let result = await User.findById(req.params.id);
        // console.log(result)
        res.send(result)
    } catch (error) {
        res.send("Invalid ID").status(400);
    }
}

async function addUser(req, res) {
    try {
        const result = await User.create({ name: req.query["name"], email: req.query["email"], password: req.query["password"] });
        res.send(result)
    } catch (error) {
        res.send("Error in Adding the User").status(400);
    }
}

async function updateUser(req, res) {
    try {
        const result = await User.updateOne({ name: req.params.name }, { email: req.query["email"] });
        res.send(result);
    } catch (error) {
        res.send("Error in Updating the User").status(400);
    }
}

async function deleteUser(req, res) {
    try {
        const result = await User.deleteOne({ name: req.params.name });
        res.send(result);
    } catch (error) {
        res.send("Error in Deleting the User").status(400);
    }
}



export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };