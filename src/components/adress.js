import React from "react";
import { Link } from "react-router-dom";
import {CiLocationOn} from "react-icons/ci"

export default function Adress () {
  return (    
    <div className="flex flex-col gap-3 bg-yellow-100 w-4/6">
      <section className="flex flex-col gap-3 mx-5 bg-yellow-100 w-content">
        <div className="flex items-center">
          <div className="flex items-center">        
            <h2 className="font-bold text-xl border-b-2 border-yellow-400">Próspero 11</h2>
          </div>
          <div>
            <CiLocationOn/>
          </div>
        </div>
        <a 
          className="flex flex-col justify-center hover:text-yellow-900 w-1/4" 
          href="https://www.google.com.br/maps/place/Praia+do+Barbudo/@-22.8485371,-42.3162952,13.3z/data=!4m5!3m4!1s0x976c0b92b322fd:0x94aeb0e2f747a345!8m2!3d-22.86714!4d-42.2969127"
          target="_blank" 
          rel="noreferrer"
        >
          <h3  className="font-bold text-lg">Endereço</h3>
          <p>Araruama - RJ</p>
          <p>Rua X, 55, Centro</p>
          <p>Ponto de refeência</p>
          <p>7777-777</p>
        </a>
        <div className="flex flex-col justify-center w-5/6">
          <h3 className="font-bold text-lg">Horário de atendimento</h3>
          <p>De segunda a sábado: de 08h às 21h</p>
        </div> 
        <div className="flex flex-col justify-center w-1/4">
          <h3 className="font-bold text-lg">Telefones</h3>
          <Link to="/contato" className=" hover:text-yellow-900">(22)9999-9999</Link>
          <Link to="/contato" className=" hover:text-yellow-900">(22)9999-9999</Link>
          <Link to="/contato" className=" hover:text-yellow-900">(22)9999-9999</Link>
        </div> 
      </section>     
    </div>
  )
}