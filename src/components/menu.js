import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";
import hamburguer from "../assets/hamburger-menu.svg";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu w-10">
      <div className="menu-icon hidden" onClick={toggleMenu}>
        <img src={hamburguer} alt="menu" className="w-10 cursor-pointer " />
      </div>
      <nav className={`flex gap-4 menu-list ${menuOpen ? `open` : ""}`}>
        <Link to='/' className="itens-menu font-bold hover:text-yellow-900 hover:cursor-pointer">
          Início
        </Link>
        <Link to='/imoveis/a-venda' className="itens-menu font-bold hover:text-yellow-900 hover:cursor-pointer">
          Comprar
        </Link>
        <Link to='/imoveis/alugar' className="itens-menu font-bold hover:text-yellow-900 hover:cursor-pointer">
          Alugar
        </Link>
        <Link to='/blog' className="itens-menu font-bold hover:text-yellow-900 hover:cursor-pointer">
          Blog
        </Link>
        <Link to='/contato' className="itens-menu font-bold hover:text-yellow-900 hover:cursor-pointer">
          Contato
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
