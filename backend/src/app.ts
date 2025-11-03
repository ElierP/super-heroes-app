import express from 'express';
import getHeroes from "./routes/superHeroesR";
import getHeroById from "./routes/superHeroesR";
import getHeroByName from "./routes/superHeroesR";
import cors from 'cors'
const app = express();
app.use(cors())

app.use("/api/heroes", getHeroes);
app.use("/api/heroes:id", getHeroById);
app.use("/api/heroes:name", getHeroByName);

export default app;