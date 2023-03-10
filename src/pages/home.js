import Carousel from "../components/carousel";
import { Link } from "react-router-dom";
import Feature from "../components/features";
import "../css/Button.css";
import { DataListPurchase, DataListRent } from "../data/dataListHome";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center main-screen-mobile">
      <Carousel />
      <div className="w-full flex flex-col flex-wrap bg-yellow-100 mt-3.5 p-1 section-home-mobile">
        <div className="flex items-center justify-between btn-property-home-mobile">
          <h2 className="font-bold hover:text-yellow-900 text-xl border-b-2 border-yellow-400 ml-12">
            Imóveis à venda
          </h2>
          <Link className="btn mr-12 " to="/imoveis/a-venda">
            Ver mais
          </Link>
        </div>
        <div className="w-full flex items-center gap-5 list-purchase-mobile">
          <DataListPurchase />
        </div>
        <div className="flex items-center justify-between mt-2.5 btn-property-home-mobile">
          <h2 className="font-bold hover:text-yellow-900 text-xl border-b-2 border-yellow-400 ml-12 ">
            Imóveis para locação
          </h2>
          <Link className="btn mr-12" to="/imoveis/alugar">
            Ver mais
          </Link>
        </div>
        <div className="w-full flex items-center justify-center gap-5 list-rent-mobile">
          <DataListRent />
        </div>
      </div>
      <div className="flex items-center justify-center feature-home-mobile">
        <Feature />
      </div>
    </div>
  );
}
