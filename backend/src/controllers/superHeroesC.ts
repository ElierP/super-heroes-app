import fs from "fs";
import path from "path";
import { Request, Response } from "express";

const dataBase = path.join(__dirname, "../../data/db.json");

export const getHeroes = (req: Request, res: Response) => {
    const data = fs.readFileSync(dataBase, "utf8");
    const heroes = JSON.parse(data);
    res.json(heroes);
};

export const getHeroById = (req: Request, res: Response) =>{
    const data = fs.readFileSync(dataBase, "utf8");
    const heroes = JSON.parse(data);

    const hero = heroes.find((h: any) => h.id === Number(req.params.id));

    if(!hero){
        res.status(400).json({message: "Héroe no encontrado"})
    };

    res.json(hero);
};

export const getHeroByName = (req: Request, res: Response) =>{
    const data = fs.readFileSync(dataBase, "utf8");
    const heroes = JSON.parse(data);
    
    const hero = heroes.find((n: any) => n.name === String(req.params.name));
    

    if(!hero){
        res.status(400).json({message: "Héroe no encontrado"})
    };

    res.json(hero);
};