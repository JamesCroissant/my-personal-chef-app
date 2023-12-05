import { Request, Response } from 'express';
import User, { IUser } from '../models/User';


// Add FAVORITE RECIPE TO YOUR OWN LIST
export const addFavorite = async (req: Request, res: Response) => {
  try {
    const userId = req.body.id;
    const recipeId = req.body.recipeId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.favorites = [...user.favorites, recipeId];
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// REMOVE FAVORITE RECIPE FROM YOUR OWN LIST
export const removeFavorite = async (req: Request, res: Response) => {
  try {
    const userId = req.body.id;
    const recipeId = req.body.recipeId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.favorites = user.favorites.filter(id => id !== recipeId);
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET YOUR OWN FAVORITE RECIPE LIST
export const getFavorites = async (req: Request, res: Response) => {
  try {
    const userId = req.body.id;

    const user = await User.findById(userId).populate('favorites');
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};
