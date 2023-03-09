import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ImmobileContext from "../context/ImmobileContext";
import "../css/Card.css";

export default function Cards(props) {
  const { description, id } = props;
  const { renderDetailsProperty } = useContext(ImmobileContext);

  return (
    <Link className="card" to={`/imoveis/${id}`} onClick={() => renderDetailsProperty(id)}>
      <div className="card-img">
        <img
          className="w-full h-96 rounded-lg"
          src={props.image}
          alt="Imóveis"
        />
      </div>
      <div className="card-info">
        <p className="font-black description-mobile"> {props.city}</p>
        <p className="font-black text-md description-mobile">{props.place}</p>
        <ul className="text-body mt-3 flex flex-col gap-2 h-80 description-mobile">
          {description}
        </ul>
      </div>
      <div className="card-footer">
        <p className="text-title description-mobile">{props.category}</p>
        <p className="text-title description-mobile">{`R$ ${props.price}`}</p>
      </div>
    </Link>
  );
}
