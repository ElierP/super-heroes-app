import express from 'express';
import getHeroes from "./routes/heroesMarvelR";

const app = express()
const port = 8090;

app.use("/api/heroes", getHeroes);

app.listen(port, () => {
  console.log(`Server on localhost:${port}`)
})

