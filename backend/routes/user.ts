import express from "express";
import { getFavorites, addFavorite, removeFavorite } from  '../controllers/user';

const router = express.Router();


router.post('/favorite', addFavorite);
router.delete('/favorite', removeFavorite);
router.get('/favorites', getFavorites);

export default router;