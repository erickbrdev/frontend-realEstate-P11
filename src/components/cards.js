import React from "react";
import { Link } from "react-router-dom";
import '../css/Card.css';

export default function Cards(props) {  
  const { description } = props
  return (
  <Link class="card" to={`/${props.id}${props.city}${props.category}`}>
    <div class="card-img">
      <img 
        className="w-full h-96 rounded-lg"
        src={ props.image }
        alt="Imóveis"        
      />
    </div>
    <div class="card-info">
      <p class="font-black description-mobile"> {props.city}</p>
      <p class="font-black text-md description-mobile">{props.place}</p>
      <ul class="text-body mt-3 flex flex-col gap-2 h-80 description-mobile">
        {description}
      </ul>
    </div>
    <div class="card-footer">
      <p class="text-title description-mobile">{props.category}</p>      
      <p class="text-title description-mobile">{`R$ ${props.price}`}</p>  
    </div>
  </Link>
  )
}