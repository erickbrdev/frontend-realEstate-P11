import { imoveis } from "./data";
import Cards from "../components/cards";
import React from "react";

export default function DataList() {   
  return (         
    imoveis.map((imoveis, index) => {
      return (      
        <Cards        
          id={ imoveis.id }             
          key= { index }
          image= { imoveis.image }
          city= { imoveis.city }
          place= { imoveis.place }
          description = { imoveis.description.map((item, index) => {
            return <li key={index}>{item}</li>            
          }) } 
          category= { imoveis.category }
          price = { imoveis.price }          
        />
      )
    })        
  )
}