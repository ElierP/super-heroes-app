import express from "express"; 
import { getHeroes, getHeroById } from "../controllers/superHeroesC"; 

const router = express.Router();

router.get("/", getHeroes);
router.get("/id/:id", getHeroById);

export default router;