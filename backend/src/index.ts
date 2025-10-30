import express from 'express';
import getHeroes from "./routes/heroesMarvelR";
import getHeroById from "./routes/heroesMarvelR";

const app = express()
const port = 8090;

app.use("/api/heroes", getHeroes);
app.use("/api/heroes:id", getHeroById);

app.listen(port, () => {
  console.log(`Server on localhost:${port}`)
})

