import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
// import bcrypt from 'bcryptjs';
import User, { IUser } from '../models/User';

const saltRounds = 10;

// SIGNUP
exports.registerUser = async (req: Request, res: Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// LOGIN
exports.loginUser =  async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("User not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json("Invalid password");
    
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};