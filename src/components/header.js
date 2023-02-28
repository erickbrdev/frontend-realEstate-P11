import React from "react";
import { Link } from "react-router-dom"
import logotipo from "../assets/logotipo.jpeg"

export default function Header() {
  return (
    <header className="flex justify-around items-center bg-yellow-400 h-16 fixed w-full z-10"  id="inicio">            
      <div id="logo">
        <img 
          src={ logotipo }
          alt="logotipo da empresa"
          className="h-16 p-1 rounded-full"
        />
      </div>      
      <nav id="menu-nav" className="flex gap-4">
        <Link className="font-bold hover:text-yellow-900 hover:cursor-pointer" to="/">Início</Link>
        <Link className="font-bold hover:text-yellow-900 hover:cursor-pointer" to="/imoveis/a-venda">Comprar</Link>
        <Link className="font-bold hover:text-yellow-900 hover:cursor-pointer" to="/imoveis/alugar">Alugar</Link>
        <Link className="font-bold hover:text-yellow-900 hover:cursor-pointer" to="/servicos">Serviços</Link>
        <Link className="font-bold hover:text-yellow-900 hover:cursor-pointer" to="/blog">Blog</Link>   
        <Link className="font-bold hover:text-yellow-900 hover:cursor-pointer" to="/contato">Contato</Link>        
      </nav>      
    </header>
  )
}