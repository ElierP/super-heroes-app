import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";

interface Hero {
    name: string,
    slug: string,
    powerstats: {
        intelligence: number,
        strength: number,
        speed: number,
        durability: number,
        power: number,
        combat: number,
    },
    appearance:{
        gender: string,
        race: string,
        height:[string, string],
        weight: [string, string],
        eyeColor: string,
        hairColor: string,
    },
    biography: {
        fullName: string,
        alterEgos: string,
        aliases: [
        string
    ],
    placeOfBirth: string,
    firstAppearance: string,
    publisher: string,
    alignment: string
    },
    work: {
        occupation: string,
        base: string
    },
    connections: {
        groupAffiliation: string,
        relatives: string
    },
    images: {
    //   xs: string,
    //   sm: string,
    //   md: string,
        lg: string
    }
};


export default function Hero() {
    const { id } = useParams();
    const [hero, setHero] = useState<Hero | null>(null);

    useEffect(() => {
        api.get(`/heroes/id/${id}`)
        .then((res) => setHero(res.data));
    }, [id]);

    if (!hero) return <p className="text-center">Cargando...</p>;

    return (
        <p>hola</p>
    );
}