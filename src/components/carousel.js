import React, { useState, useEffect } from "react";
import casaHero from "../assets/casaHero.jpg"
import casaChamativa from "../assets/casaChamativa.jpg"
import sonhoCasa from "../assets/sonhoCasa.jpg"
import realizaçãoCasa from "../assets/realizaçãoCasa.jpg"

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const images = [casaHero, casaChamativa, sonhoCasa, realizaçãoCasa];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevState) => (prevState + 1) % images.length);
    }, 3000)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-3/6 mt-20 flex justify-center items-center">
      <img 
        src={images[index]} 
        alt="Imagens de casas"
        className="w-4/6 h-96 rounded-2xl"
      />
    </div>
  )
}