import { imoveis } from "./data";
import Cards from "../components/cards";

export function DataListPurchase() {  
  return (         
    imoveis.slice(0,4).map((imoveis, index) => {
      return (      
        <Cards             
          key= { index }
          city= { imoveis.city }
          place= { imoveis.place }
          description = { imoveis.description.map((item, index) => {
            return <p key={index}>{item}</p>
          }) } 
          category= { imoveis.category }
          price = { imoveis.price }
          image = { imoveis.image }
        />
      )
    })        
  )
}

export function DataListRent() {
  return (         
    imoveis.slice(4,8).map((imoveis, index) => {
      return (      
        <Cards             
          key= { index }
          city= { imoveis.city }
          place= { imoveis.place }
          description = { imoveis.description.map((item, index) => {
            return <p key={index}>{item}</p>
          }) } 
          category= { imoveis.category }
          price = { imoveis.price }
          image = { imoveis.image }
        />
      )
    })        
  )
}