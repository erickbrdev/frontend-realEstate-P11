export default function FilterType() { 
  return (
    <div className="mt-3 ml-2.5">
      <h3 className="font-bold text-lg">Tipos</h3>
      <div className="flex flex-col justify-center gap-1">
        <div className="flex gap-1 items-center">
          <label htmlFor="venda">Apartamento</label>
          <input
            type="checkbox"
            key="apartamento"
            id="apartamento"
            value="apartamento"                             
          />
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="casa">Casa</label>
          <input type="checkbox" id="casa" value="casa" />
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="loja">Loja</label>
          <input type="checkbox" id="loja" value="loja" />
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="sitio">Sítio</label>
          <input type="checkbox" id="sitio" value="sitio" />
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="terreno">Terreno</label>
          <input type="checkbox" id="terreno" value="terreno" />
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="sala">Sala</label>
          <input type="checkbox" id="sala" value="sala" />
        </div>
        <div className="flex gap-1 items-center">
          <label htmlFor="predio-residencial">Prédio Residencial</label>
          <input
            type="checkbox"
            id="predio-residencial"
            value="predio-residencial"
          />
        </div>
      </div>
    </div>
  );
}
