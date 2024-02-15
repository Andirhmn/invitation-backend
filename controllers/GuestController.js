import Guest from "../models/GuestModel.js";

export const getGuests = async(req, res) => {
  try {
    const response = await Guest.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const createGuests = async(req, res) => {
  try {
    await Guest.create(req.body);
    res.status(201).json({msg: "Guest created"});
  } catch (error) {
    console.log(error.message);
  }
}
