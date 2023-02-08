import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp} from 'react-icons/fa';


export const WhatsappButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/22988278379", '_blank')
  };

  return (
    <div>
      <button onClick={handleClick} >
        <FaWhatsapp className="hover:text-yellow-900" size={35}/>
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
      <button onClick={handleClick} >
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
      <button onClick={handleClick} >
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
      <button onClick={handleClick} >
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
      <button onClick={handleClick} >
        <FaYoutube className="hover:text-yellow-900" />
      </button>
    </div>
  )
}