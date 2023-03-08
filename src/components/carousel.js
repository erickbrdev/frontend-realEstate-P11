import React, { useState, useEffect } from "react";
import familiacasa from "../assets/familiacasa.jpg";
import familiacasa2 from "../assets/familiacasa2.jpg";
import familiacasa4 from "../assets/familiacasa4.jpg";
import familiacasa5 from "../assets/familiacasa5.jpg";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const images = [familiacasa, familiacasa2, familiacasa4, familiacasa5];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevState) => (prevState + 1) % images.length);
    }, 3000)

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="w-full h-3/6 mt-20 flex justify-center items-center carousel-mobile">
      <img 
        src={images[index]} 
        alt="Imagens de casas"
        className="w-4/6 h-96 rounded-2xl images-carousel-mobile"
      />
    </div>
  )
}