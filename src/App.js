import { Switch, Route } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import Purchase from './pages/purchase.js';
import Rent from './pages/rent.js';

export default function App () {       
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/imoveis/a-venda" component={ Purchase }/>
          <Route path="/imoveis/alugar" component={ Rent }/>
        </Switch>
        <Footer/>
      </div>
    )
  }



