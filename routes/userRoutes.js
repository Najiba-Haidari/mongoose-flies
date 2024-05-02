import express from "express";
import {getAllUsers, getOneUser, addUser, updateUser, deleteUser} from "../controller/user.js";


const router = express.Router();

router.get("/allUsers", getAllUsers)
router.get("/:id", getOneUser)
router.post("/addUser", addUser);
router.patch("/updateUser/:name", updateUser)
router.delete("/deleteUser/:name", deleteUser)


export default router;