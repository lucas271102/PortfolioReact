import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import perfil from "./assets/perfil.jpg";
import Minga from "./assets/Minga.png";
import Home from "./assets/home.jpg";
import Night from "./assets/NIGHT2.jpg";

function App() {
  const [active, setActive] = useState(0);
  const proyects = [
    {
      name: "Minga",
      description: "Aplicación web para publicar, leer y editar comics y Manga",
      image: Minga,
      host: "https://minga-amarillo-front-32oe-cu5utv4jw-zerhiz.vercel.app/",
    },
    {
      name: "Home Essentials",
      description:
        "E-commerce de venta de artículos electrónicos y para el hogar",
      image: Home,
      host: "https://home-essentials-front.vercel.app/",
    },
    {
      name: "Night 2 Events",
      description:
        "Aplicación web para publicar y comprar tickets que otras personas no van a utilizar, y publicar tickets que no vayas a utilizar.",
      image: Night,
      host: "https://night-2-events.vercel.app/",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center p-12">
        <img src={perfil} alt="" class="rounded-full w-64 h-64" />
        <h1 className="text-4xl font-sans text-center p-6 text-white font-light flex-col">
          ¡Hola! Soy Lucas Speziale, Desarrollador Full Stack y estudiante de
          Licenciatura en Sistemas, y este es mi portfolio
        </h1>
      </div>
      <div className="flex justify-center items-center  flex-col p-12">
        <p className="text-2xl font-sans text-center p-6 text-white font-light ">
          He trabajado en proyectos bajo metodologías Scrum con estas
          tecnologías: Mongo DB, Express, React Js y Node Js. Cuento con
          conocimientos también en NextJs, TailwindCSS, NextUI, ChakraUI y
          Bootstrap.
        </p>
        <h4 className="text-2xl font-sans text-center p-6 text-white font-light ">
          Aquí debajo, encontrarás algunos de mis proyectos realizados
        </h4>
      </div>
      <ul>
        {proyects.map((proyect, i) => (
          <li
            key={i}
            style={{ backgroundImage: `url(${proyect.image})` }}
            role="button"
            className={active === i ? "active" : ""}
            onClick={() => setActive(i)}
          >
            <h3 className="text-white font-sans">{proyect.name}</h3>
            <div className="section-content">
              <div className="inner">
                <div className="bio">
                  <h2>{proyect.name}</h2>
                  <p className="text-xl">{proyect.description}</p>
                </div>
                <a
                  href={proyect.host}
                  className="text-black text-xl bg-white border rounded-md"
                >
                  Visitar
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>





      
    </>
  );
}

export default App;
