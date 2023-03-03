import Cards from "../components/cards";
import React, { useContext } from "react";
import ImmobileContext from "../context/ImmobileContext";


export default function DataList() {  
  const { filterImmobiles } = useContext(ImmobileContext)

  return (         
    filterImmobiles.map((imoveis, index) => {
      return (      
        <Cards        
          id ={ imoveis.id }             
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