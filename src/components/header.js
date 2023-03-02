import logotipo from "../assets/logotipo.jpeg";
import Menu from "./menu";

export default function Header() {
  return (
    <header className="flex justify-evenly items-center bg-yellow-400 h-16 fixed w-full z-10 mobile-header">
      <div id="logo">
        <img
          src={logotipo}
          alt="logotipo da empresa"
          className="h-16 p-1 rounded-full logotipo-mobile"
        />
      </div>
      <nav id="menu-nav" className="flex gap-4 nav-mobile">
        <Menu /> 
      </nav>
    </header>
  );
}
