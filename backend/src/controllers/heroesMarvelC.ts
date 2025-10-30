import fs from "fs";
import path from "path";
import { Request, Response } from "express";

const dataBase = path.join(__dirname, "../../data/db.json");

export const getHeroes = (req: Request, res: Response) => {
    const data = fs.readFileSync(dataBase, "utf8");
    const heroes = JSON.parse(data);
    res.json(heroes);
};

export const getHeroById = () =>{

};