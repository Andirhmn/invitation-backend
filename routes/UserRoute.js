import express from "express";
import {getUsers, getUsersById, createUsers} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', createUsers);
router.get('/users/:id', getUsersById);

export default router;
