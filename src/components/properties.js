import DataList from "../data/dataList";

export default function Properties(props) { 

  return (
    <div className="flex items-start gap-3 h-full bg-yellow-100 w-full rounded-lg">
      <div className="p-2 w-full">
        <div className="flex mobile-cod-property w-full justify-between gap-10">
          <h3 className="text-center font-bold text-xl border-b-2 border-yellow-500 mobile-title">
            {props.title}
          </h3>
          <label className="flex gap-1 items-center">
            <p className="font-bold">Código do imóvel</p>
            <input
              type="text"
              placeholder="Digite o código do imóvel"
              className="border-2 border-black rounded-lg p-1 w-3/6"
            />
          </label>
        </div>
        <div className="w-full flex gap-4 justify-center flex-wrap mobile-list-property">          
          <DataList />
        </div>
      </div>
    </div>
  );
}
