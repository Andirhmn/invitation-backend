import express from "express";
import {getGuests, createGuests} from "../controllers/GuestController.js";

const router = express.Router();

router.get('/guests', getGuests);
router.post('/guests', createGuests);

export default router;
