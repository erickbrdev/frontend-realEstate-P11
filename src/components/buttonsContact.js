import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp} from 'react-icons/fa';
import '../css/ButtonContact.css'

export const WhatsappButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/22988278379", '_blank')
  };

  return (
    <div>
      <button onClick={handleClick} className="buttonContact">
        <FaWhatsapp className="hover:text-yellow-900"/>
      </button>
    </div>
  )
}


export const InstagramButton = () => {
  const handleClick = () => {
    window.open("https://www.instagram.com/phelipeimoveiss/", '_blank')
  };

  return (
    <div>
      <button onClick={handleClick} className="buttonContact">
        <FaInstagram className="hover:text-yellow-900"/>
      </button>
    </div>
  )
}

export const FacebookButton = () => {
  const handleClick = () => {
    window.open("https://www.instagram.com/phelipeimoveiss/", '_blank')
  };

  return (
    <div>
      <button onClick={handleClick} className="buttonContact">
        <FaFacebook className="hover:text-yellow-900"/>
      </button>
    </div>
  )
}

export const LinkedinButton = () => {
  const handleClick = () => {
    window.open("https://www.instagram.com/phelipeimoveiss/", '_blank')
  };

  return (
    <div>
      <button onClick={handleClick} className="buttonContact">
        <FaLinkedin className="hover:text-yellow-900"/>
      </button>
    </div>
  )
}

export const YoutubeButton = () => {
  const handleClick = () => {
    window.open("https://www.instagram.com/phelipeimoveiss/", '_blank')
  };

  return (
    <div>
      <button onClick={handleClick} className="buttonContact">
        <FaYoutube className="hover:text-yellow-900" />
      </button>
    </div>
  )
}