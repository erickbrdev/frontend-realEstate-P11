import React from "react"
import logotipo from "../assets/logotipo.jpeg"
import { WhatsappButton, InstagramButton, FacebookButton, LinkedinButton, YoutubeButton } from "./buttonsContact"

export default function Contact() {
  return (
    <footer className="flex items-center bg-yellow-100 gap-7">
      <img
        src={ logotipo }
        alt="Logotipo da empresa Prospero 11"
        className="h-36 rounded-full p-3 "
      />
      <ul className="ml-5 flex flex-col items-center justify-center">
        <li className="font-bold hover:text-yellow-900 list-none mt-2">(22)9999-9999</li>
        <li className="font-bold hover:text-yellow-900 list-none mt-2">(22)9999-9999</li>
        <li className="font-bold hover:text-yellow-900 list-none mt-2">(22)9999-9999</li>
        <li className="font-bold hover:text-yellow-900 list-none mt-2">(22)9999-9999</li>        
      </ul>
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
          De moradia aos seus sonhos!
        </p>
      </div>
    </footer> 
  )
}