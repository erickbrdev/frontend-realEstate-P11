import React from "react"
import logotipo from "../assets/logotipo.jpeg"
import { Link } from "react-router-dom"
import { WhatsappButton, InstagramButton, FacebookButton, LinkedinButton, YoutubeButton } from "./buttonsContact"

export default function Contact() {
  return (
    <footer className="flex items-center bg-yellow-100 gap-7">
      <img
        src={ logotipo }
        alt="Logotipo da empresa Prospero 11"
        className="h-36 rounded-full p-3 "
      />
      <div className="ml-5 flex flex-col items-center justify-center">
        <Link className="font-bold hover:text-yellow-900 mt-2" to="/">Início</Link>
        <Link className="font-bold hover:text-yellow-900 mt-2" to="/imoveis/a-venda">Comprar</Link>
        <Link className="font-bold hover:text-yellow-900 mt-2" to="/imoveis/alugar">Alugar</Link>         
      </div>
      <div className="ml-5 flex flex-col items-center justify-center">
        <Link className="font-bold hover:text-yellow-900 mt-2">Serviços</Link>
        <Link className="font-bold hover:text-yellow-900 mt-2" to="/blog">Blog</Link>
        <Link className="font-bold hover:text-yellow-900 mt-2">Contato</Link>         
      </div>
      <div className="flex gap-7">      
        <InstagramButton/>
        <FacebookButton/>
        <LinkedinButton/>
        <YoutubeButton/>
        <WhatsappButton/> 
      </div>    
      <div>
        <p 
          className="italic text-2xl font-bold text-neutral-900 hover:text-yellow-900 border-yellow-400 border-2 p-2"
        >
          Um novo lar para seus sonhos!
        </p>
      </div>
    </footer> 
  )
}