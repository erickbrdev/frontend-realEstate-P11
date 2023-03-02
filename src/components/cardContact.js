import React from "react"
import logotipo from "../assets/logotipo.jpeg"
import { Link } from "react-router-dom"

export default function Contact() {
  return (
    <footer className="flex items-center bg-yellow-100 gap-7">
      <img
        src={ logotipo }
        alt="Logotipo da empresa Prospero 11"
        className="h-36 rounded-full p-3 "
      />
      <div className="ml-5 flex flex-col items-center justify-center">
        <Link className="font-bold hover:text-yellow-900 mt-2" to="/">
          <a href="#inicio">Início</a>
        </Link>
        <Link className="font-bold hover:text-yellow-900 mt-2" to="/imoveis/a-venda">Comprar</Link>
        <Link className="font-bold hover:text-yellow-900 mt-2" to="/imoveis/alugar">Alugar</Link>         
      </div>
      <div className="ml-5 flex flex-col items-center justify-center">
        {/* <Link className="font-bold hover:text-yellow-900 mt-2" to="/servicos">Serviços</Link> */}
        <Link className="font-bold hover:text-yellow-900 mt-2" to="/blog">Blog</Link>
        <Link className="font-bold hover:text-yellow-900 mt-2" to="/contato">Contato</Link>         
      </div>      
      <div className="phrase-mobile">
        <p 
          className="italic text-2xl font-bold text-neutral-900 border-b-2 border-yellow-400 p-2"
        >
          Não perca mais tempo, venha para a nossa imobiliária e realize o sonho da casa própria agora mesmo!
        </p>
      </div>
    </footer> 
  )
}