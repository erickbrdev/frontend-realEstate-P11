import Cards from "./cards"

export default function Properties () {
  return (
    <div className="flex items-start gap-3 h-full bg-yellow-100 w-full rounded-lg">
      <div className="p-2">
        <div className="flex justify-between">
          <h3 className="text-center font-bold text-xl border-b-2 border-yellow-500">Imóveis a venda</h3> 
          <label className="flex gap-1 items-center">
            <p className="font-bold">Código do imóvel</p>
            <input 
              type="text" 
              placeholder="Digite o código do imóvel"
              className="border-2 border-black rounded-lg p-1 w-3/6"
            />
          </label>
          
        </div>            
        <div className="w-full flex gap-5 justify-center flex-wrap">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>     
     
    </div>
  )
}