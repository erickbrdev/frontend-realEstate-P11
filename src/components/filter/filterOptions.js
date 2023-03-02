export default function FilterOptions () {
  return (  
    <div className="ml-2.5">
      <h3 className="font-bold text-lg">Qual a sua opção?</h3>
      <div className="flex flex-col justify-center gap-1">
        <div className="flex gap-1 items-center">
          <label htmlFor="venda">Venda</label>
          <input type="radio" id="venda" value="Venda" name="opção"/>          
        </div>
       {/* <div className="flex gap-1 items-center">
          <label htmlFor="aluguel">Locação</label>
          <input type="radio" id="aluguel" value="Aluguel" name="opção"/>
        </div>  */}
      </div>
    </div>    
  )
} 