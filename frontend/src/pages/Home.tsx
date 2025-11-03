import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();



useEffect(() => {
  if(!navigator.onLine){
  const storedHeroes = localStorage.getItem("heroes");
  if (storedHeroes) {
    setHeroes(JSON.parse(storedHeroes));
  }
  return;
}else{
    api.get("/heroes")
      .then((res) => {
        setHeroes(res.data);
        localStorage.setItem("heroes", JSON.stringify(res.data));
      })
      .catch((err) => console.error("Error al cargar héroes:", err));
    }
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {heroes.map((hero) => (
          <div className="col-sm-6 col-md-4 col-lg-2 mb-4" key={hero.id}>
            <div className="card shadow-sm" onClick={() => navigate(`/heroes/id/${hero.id}`)} style={{ cursor: "pointer" }}>
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