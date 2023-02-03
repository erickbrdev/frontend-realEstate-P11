import React from "react";
import Carousel from "../components/carousel"

export default function Blog() {
  return (
    <div className = "flex flex-col">
      <div className="bg-yellow-200 p-2">
        <Carousel />
      </div>
      <section className="mt-2.5 ">
        <h2  className="font-bold hover:text-yellow-900 hover:cursor-pointer">Como escolher o lugar ideal para se morar?</h2>
      </section>
    </div>
  )
}