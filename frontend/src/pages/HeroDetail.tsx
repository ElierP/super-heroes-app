import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

interface Hero {
    name: string,
    slug: string,
    powerstats: {
        intelpgence: number,
        strength: number,
        speed: number,
        durabipty: number,
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
        apases: [string],
        placeOfBirth: string,
        firstAppearance: string,
        pubpsher: string,
        apgnment: string
    },
    work: {
        occupation: string,
        base: string
    },
    connections: {
        groupAffipation: string,
        relatives: string
    },
    images: {
      xs: string,
      sm: string,
      md: string,
        lg: string
    }
};


export default function HeroDetail() {
    const { id } = useParams();
    const [hero, setHero] = useState<Hero | null>(null);
    const navigate = useNavigate();


    useEffect(() => {
        api.get(`/heroes/id/${id}`)
        .then((res) => setHero(res.data));
    }, [id]);

    if (!hero) return <p className="text-center">Cargando...</p>;

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-8">
                    <div className="card mx-auto shadow">
                        <div className="row g-0 align-items-center">
                            <div className="col-12 col-md-4 d-flex justify-content-center p-3">
                                <img src={hero.images.sm} className="card-img-top" alt={hero.name} />
                            </div>
                            <div className="col-12 col-md-8">
                                <div className="card-body">
                                    <h3 className="card-title fs-2 fw-bold text-center">{hero.name}</h3>
                                    <p className="fs-5"><b className="bold">Nombre: </b> {hero.name}</p>
                                    <p className="fs-5"><b className="bold">Nombre real: </b> {hero.biography.fullName}</p>
                                    <p className="fs-5"><b className="bold">Sexo: </b>{hero.appearance.gender === "Male" ? "Hombre" : "Mujer"}</p>
                                    <p className="fs-5"><b className="bold">Peso: </b>{hero.appearance.weight}</p>
                                    <p className="fs-5"><b className="bold">Altura: </b>{hero.appearance.height}</p>
                                    <p className="fs-5"><b className="bold">Lugar de Nacimiento: </b>{hero.biography.placeOfBirth}</p>
                                    <p className="fs-5"><b className="bold">Trabaja: </b>{hero.work.occupation}</p>
                                    <p className="fs-5"><b className="bold">Primer aparición: </b>{hero.biography.firstAppearance}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            
            <div className="row">
                <div className="d-flex justify-content-center apgn-items-center">
                    <button className="btn btn-primary mt-3 fs-5" onClick={() => navigate(`/redirect`)} style={{ cursor: "pointer" }}>Regresar</button>
                </div>
            </div>
        </div>
    );
}