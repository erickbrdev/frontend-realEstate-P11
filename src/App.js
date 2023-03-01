import { Switch, Route } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import Purchase from './pages/purchase.js';
import Rent from './pages/rent.js';
import Blog from './pages/blog.js';
// import Adress from './components/adress.js';
import Contact from './pages/contact.js';
import whatsappIcon from './assets/whatsappIcon.png'
import SocialMedia from './components/socialMedia.js';
import "./css/WhatsappIcon.css"
import "./mobile.css"

export default function App () {       
    return(
      <div className="mobile-app">
        <Header/>
        <a 
          target="_blank" 
          rel="noreferrer"
          href="https://wa.me/22988278379"          
        >
          <img src={whatsappIcon} alt="icone whatsapp" className='whatsapp-icon'/>
        </a>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/imoveis/a-venda" component={ Purchase }/>
          <Route path="/imoveis/alugar" component={ Rent }/>
          <Route path="/blog" component={ Blog }/>
          <Route path="/contato" component={ Contact }/>
        </Switch>
        <span className='flex bg-yellow-100 justify-evenly mt-6 p-2'>
          
          <SocialMedia/> 
        </span>                      
        <Footer/>
      </div>
    )
  }



