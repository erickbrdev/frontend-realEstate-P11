import React from "react";
import { Link } from "react-router-dom"
import apartamento from "../assets/apartamento.jpg"
import '../css/Feature.css';

export default function Feature() {
  return (
    <Link className="main flex flex-col my-2.5">
        <div className="main-image flex p-2">
        <img
          src={ apartamento }
          alt="Dicas para escolher o apartamento ideal!"
          className="h-96 w-5/6 rounded-2xl"
        />
        <h3 className="title-main "> Dicas para escolher o apartamento ideal! </h3>
        <h3 className="header"> Como escolher o apartamento ideal? </h3>
      </div>   
    </Link>
  )
}