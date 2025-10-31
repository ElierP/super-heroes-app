import express from "express"; 
import { getHeroes, getHeroById, getHeroByName } from "../controllers/heroesMarvelC"; 

const router = express.Router();

router.get("/", getHeroes);
router.get("/id/:id", getHeroById);
router.get("/name/:name", getHeroByName);

export default router;