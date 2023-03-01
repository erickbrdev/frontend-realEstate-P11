import Contact from "./cardContact"

export default function Footer() {
  return (
    <div className="mobile-w-footer">
      <Contact />            
      <footer className="flex justify-around items-center bg-yellow-400 h-12 absolut copyright-mobile">  
        <p className="font-bold list-none">
          Copyright © 2023 Próspero 11 - Todos os direitos reservados.
        </p>      
      </footer>
    </div>
  )
}