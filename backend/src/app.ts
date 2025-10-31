import express from 'express';
import getHeroes from "./routes/heroesMarvelR";
import getHeroById from "./routes/heroesMarvelR";
import getHeroByName from "./routes/heroesMarvelR";

const app = express();

app.use("/api/heroes", getHeroes);
app.use("/api/heroes:id", getHeroById);
app.use("/api/heroes:name", getHeroByName);

export default app;