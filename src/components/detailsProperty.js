export default function DetailsProperty(props) {
  const { city, place, description, price, category, image } = props;
  return (
    <div className="flex flex-col justify-start p-5">
      <div className="flex justify-center overflow-x-auto">
        <div className="flex gap-5">{image}</div>
      </div>
      <div className="mt-2 flex justify-around bg-yellow-200 p-5 items-center">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <p className="font-bold">Cidade:</p>
            <p>{city}</p>
          </div>
          <div className="flex gap-2">
            <p className="font-bold">Bairro:</p>
            <p>{place}</p>
          </div>
          {description}
          <div className="flex gap-2">
            <p className="font-bold">Categoria:</p>
            <p>{category}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold">Investimento:</p>
            <p>{`R$ ${price}`}</p>
          </div>
        </div>
        <p className="text-yellow-900 text-2xl text-center w-64">
          Venha para nossa imobiliária e encontre o lar dos seus sonhos com
          facilidade e rapidez!
        </p>
      </div>
    </div>
  );
}
