import React from "react";
import { Link } from "react-router-dom";
import logotipo from "../assets/logotipo.jpeg";

export default function Header() {
  return (
    <header
      className="flex justify-around items-center bg-yellow-400 h-16 fixed w-full z-10 mobile-header"      
    >
      <div id="logo">
        <img
          src={logotipo}
          alt="logotipo da empresa"
          className="h-16 p-1 rounded-full logotipo-mobile"
        />
      </div>
      <nav id="menu-nav" className="flex gap-4 nav-mobile">
        <Link
          className="font-bold hover:text-yellow-900 hover:cursor-pointer home-mobile"
          to="/"
        >
          Início
        </Link>
        <Link
          className="font-bold hover:text-yellow-900 hover:cursor-pointer purchase-mobile"
          to="/imoveis/a-venda"
        >
          Comprar
        </Link>
        <Link
          className="font-bold hover:text-yellow-900 hover:cursor-pointer rent-mobile"
          to="/imoveis/alugar"
        >
          Alugar
        </Link>
        <Link
          className="font-bold hover:text-yellow-900 hover:cursor-pointer"
          to="/"
        >
          Serviços
        </Link>
        <Link
          className="font-bold hover:text-yellow-900 hover:cursor-pointer"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="font-bold hover:text-yellow-900 hover:cursor-pointer"
          to="/contato"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
