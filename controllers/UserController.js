import User from "../models/UserModel.js";

export const getUsers = async(req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const getUsersById = async(req, res) => {
  try {
    const response = await User.findOne({where: {id: req.params.id}});
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const createUsers = async(req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({msg: "User created"});
  } catch (error) {
    console.log(error.message);
  }
}

