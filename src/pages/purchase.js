import Filter from "../components/filter";
import Properties from "../components/properties";

export default function Purchase () {
  return (
    <main className="flex">
      <section className="w-full flex justify-center gap-5 mt-20 mx-5 mobile-section-property">
        <Filter />
        <Properties title="Imóveis a venda" />
      </section>     
    </main>
  )
}