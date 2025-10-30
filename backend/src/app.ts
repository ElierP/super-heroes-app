import express from 'express';
import getHeroes from "./routes/heroesMarvelR";
import getHeroById from "./routes/heroesMarvelR";

const app = express();

app.use("/api/heroes", getHeroes);
app.use("/api/heroes:id", getHeroById);

export default app;