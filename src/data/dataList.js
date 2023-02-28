import { imoveis } from "./data";
import Cards from "../components/cards";

export default function DataList() {  
  return (         
    imoveis.slice(0,9).map((imoveis, index) => {
      return (      
        <Cards                     
          key= { index }
          image= { imoveis.image }
          city= { imoveis.city }
          place= { imoveis.place }
          description = { imoveis.description } 
          category= { imoveis.category }
          price = { imoveis.price }
        />
      )
    })        
  )
}