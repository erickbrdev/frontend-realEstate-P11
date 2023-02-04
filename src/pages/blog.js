import React from "react";
import Carousel from "../components/carousel"

export default function Blog() {
  return (
    <div className = "flex flex-col">
      <div className="bg-yellow-200 p-2">
        <Carousel />
      </div>
      <section className="mt-2.5 flex flex-col justify-center items-center">
        <h2 
          className="font-bold hover:text-yellow-900 hover:cursor-pointer text-2xl border-b-2 border-yellow-400" 
        >
          Como escolher o lugar ideal para se morar?
        </h2>
        <br/>
        <br/>
        <div className="bg-yellow-50">
          <h3 
            className="font-bold text-lg  hover:text-yellow-900 border-b-2 border-yellow-200 text-center" 
          >
            Como é a sua rotina?
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <br/>
        <div className="bg-yellow-50">
        <h3 
          className="font-bold text-lg  hover:text-yellow-900 border-b-2 border-yellow-200"
        >
          Como é a sua rotina?
        </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <br/>
        <div className="bg-yellow-50">
        <h3 
          className="font-bold text-lg  hover:text-yellow-900 border-b-2 border-yellow-200"
        >
          Como é a sua rotina?
        </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <br/>
        <div className="bg-yellow-50">
        <h3 
          className="font-bold text-lg  hover:text-yellow-900 border-b-2 border-yellow-200"
        >
          Como é a sua rotina?
        </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>
    </div>
  )
}