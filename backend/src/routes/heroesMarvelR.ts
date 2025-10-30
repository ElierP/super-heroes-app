import express from "express"; 
import { getHeroes, getHeroById } from "../controllers/heroesMarvelC"; 

const router = express.Router();

router.get("/", getHeroes);
router.get("/:id", getHeroById);

export default router;