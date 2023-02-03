import Cards from "../components/cards"
import Carousel from "../components/carousel"
import { Link } from "react-router-dom"
import Feature from "../components/features";
import '../css/Button.css';

export default function Home () {
  return (
    <div className='flex flex-col justify-center'>                     
      <Carousel />     
      <div className="w-full flex flex-col flex-wrap bg-yellow-100 mt-3.5 p-1">   
        <div className="flex items-center justify-between">
          <h2 
            className="font-bold hover:text-yellow-900 text-xl border-b-2 border-yellow-400 ml-12"
          >
            Imóveis à venda
          </h2>          
          <Link className="btn mr-12 " to="/imoveis/a-venda">Ver mais</Link>   
        </div>        
        <div className="w-full flex items-center justify-center flex-wrap gap-10">
          <Cards />
          <Cards />
          <Cards />          
          <Cards />
        </div>
        <div className="flex items-center justify-between mt-2.5">
          <h2 
            className="font-bold hover:text-yellow-900 text-xl border-b-2 border-yellow-400 ml-12 "
          >
            Imóveis para alugar
          </h2>          
          <Link className="btn mr-12" to="/imoveis/alugar">Ver mais</Link>   
        </div>        
        <div className="w-full flex items-center justify-center flex-wrap gap-10">
          <Cards />
          <Cards />
          <Cards />          
          <Cards />
        </div>
      </div>     
      <div className="flex items-center justify-center">
        <Feature/>                   
      </div>   
    </div>
  )
}