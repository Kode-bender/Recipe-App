import express from 'express'
import { addFavorite, getFavorites, removeFavorite } from '../controllers/favorites.js'

const router = express.Router()

router.get("/:userId",getFavorites)
router.post("/", addFavorite)
router.delete("/:userId/:recipeId", removeFavorite)

export default router