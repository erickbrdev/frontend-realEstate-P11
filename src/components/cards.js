import React from "react";
import { Link } from "react-router-dom";
import '../css/Card.css';

export default function Cards(props) {  
  return (
  <Link class="card">
    <div class="card-img">
      <img 
        className="w-full h-96 rounded-lg"
        src={ props.image }
        alt="Imóveis"        
      />
    </div>
    <div class="card-info">
      <p class="font-black"> {props.city}</p>
      <p class="font-black text-md">{props.place}</p>
      <p class="text-body">{props.description}</p>
    </div>
    <div class="card-footer">
      <p class="text-title">{props.category}</p>      
      <p class="text-title">{`R$ ${props.price}`}</p>  
    </div>
  </Link>
  )
}