import { useEffect, useState } from "react";
import api from "../services/api";

interface Hero {
  id: number;
  name: string;
  images: {
    sm: string;
  };
}


export default function AllHeroes (){
    const [heroes, setHeroes] = useState<Hero[]>([]);

useEffect(() => {
    api.get("/heroes")
      .then((res) => setHeroes(res.data))
      .catch((err) => console.error("Error al cargar héroes:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Super Heroes</h1>
      <div className="row">
        {heroes.map((hero) => (
          <div className="col-md-3 mb-4" key={hero.id}>
            <div className="card shadow-sm">
              <img src={hero.images.sm} className="card-img-top" alt={hero.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{hero.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}