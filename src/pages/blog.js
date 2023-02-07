import React from "react";
import apartamentoBlog from "../assets/apartamentoBlog.jpg"

export default function Blog() {
  return (
    <div className = "flex">
      <section className="mt-20 flex flex-col justify-center items-center">
        <div className="bg-yellow-100 h-full mx-2">
          <img 
            src={apartamentoBlog}
            alt="Imagem de casas"
            className="h-full 3/6 rounded-lg"            
          />
        </div>       
      </section>      
      
      <section className="mt-20 flex flex-col justify-center items-center">
        <h2 
          className="font-bold hover:text-yellow-900 hover:cursor-pointer text-2xl border-b-2 border-yellow-400" 
        >
          Como escolher o lugar ideal para se morar?
        </h2>
        <br/>
        <br/>
        <div className="bg-yellow-100">
          <h3 
            className="font-bold text-lg  hover:text-yellow-900 border-b-2 border-yellow-200 text-center" 
          >
            Como é a sua rotina?
          </h3>
          <p className="mx-5">
            O que você e sua família costumam fazer todos os dias? Procurar por um bairro que facilite a rotina dos moradores é o primeiro passo para acertar na decisão. Se você tem filhos, por exemplo, pode ser uma boa aposta optar por um bairro próximo à escola.
            <br/>
            Caso não seja possível morar perto dos locais que fazem parte da rotina dos moradores - como escola e trabalho - procure por bairros que ofereçam fácil acesso a esses pontos. Verifique as condições de trânsito e as linhas de ônibus ou metrô próximas à região.
          </p>
        </div>
        <br/>
        <div className="bg-yellow-100">
        <h3 
          className="font-bold text-lg  hover:text-yellow-900 border-b-2 border-yellow-200 text-center" 
        >
          Seu estilo de vida?
        </h3>
          <p className="mx-5">
            Aqui é importante ter em mente quais são suas principais necessidades e prioridades. Ainda que bairros familiares possam ser super tranquilos, podem não ser a escolha mais interessante para quem tem uma vida social ativa e gosta de estar em locais mais badalados, por exemplo. Do mesmo modo, uma família com crianças pequenas pode não se dar bem em um bairro universitário, que costuma ser mais movimentado.
          </p>
        </div>
        <br/>
        <div className="bg-yellow-100">
        <h3 
          className="font-bold text-lg  hover:text-yellow-900 border-b-2 border-yellow-200 text-center"
        >
          Segurança é muito importante!
        </h3>
          <p className="mx-5">
            Segurança é indispensável. Antes de bater o martelo em um imóvel, não deixe de avaliar se o bairro é seguro. Observe as condições de iluminação pública, policiamento, câmeras de segurança e movimento na rua, especialmente durante a noite.
          </p>
        </div>
        <br/>
        <div className="bg-yellow-100">
        <h3 
          className="font-bold text-lg  hover:text-yellow-900 border-b-2 border-yellow-200 text-center"
        >
          Trace seu perfil e suas expectativas!
        </h3>
          <p className="mx-5">
            Saber bem o que você quer vai diminuir as chances de acabar se mudando para um local equivocado. Depois de pensar em tudo o que é importante para você e avaliar suas possibilidades, vale a pena colocar tudo no papel para visualizar melhor o cenário geral e funciona como uma bússola para cada passo da procura.
          </p>
        </div>        
        <br/>
        <div className="bg-yellow-100">
        <h3 
          className="font-bold text-lg  hover:text-yellow-900 border-b-2 border-yellow-200 text-center"
        >
           Não deixe de lado o lazer e a vida social
        </h3>
          <p className="mx-5">
            Sabemos que as preocupações diárias existem, pensando nisso, não podemos abrir mão de um pouco de diversão. Por isso, um dos pontos que precisam ser observados no momento de escolher um bairro para morar é o lazer que o local tem a oferecer 
            <br/>
            Assim, você deve buscar por bairros que contem fácil acesso a parques, cinemas, shoppings, teatros, bares e restaurantes, clubes e locais que você procura para se divertir com a família e amigos.
          </p>
        </div>        
      </section>
    </div>
  )
}