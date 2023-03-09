import { useContext } from "react";
import DetailsProperty from "../components/detailsProperty";
import ImmobileContext from "../context/ImmobileContext";

export default function InfoProperty () {
  const { detailsPropety } = useContext(ImmobileContext)
  
  return(
    <div className="pt-20 mobile-property-details">
      <DetailsProperty 
        image={detailsPropety.imagesDetails.map((item) => {
          return <img src={item} alt="Propriedades" className="w-1/5 h-6/6 p-1 rounded-lg" key={item}/>
        })}
        city={detailsPropety.city}
        place={detailsPropety.place}
        description={detailsPropety.description.map((item) => {
          return (
            <p key={item}>{item}</p>
          )
        })}
        price={detailsPropety.price}
        category={detailsPropety.category}
      />
    </div>
  )
}