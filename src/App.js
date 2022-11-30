import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartContextProvider } from './storage/CartContext';
import CartView from './components/CartView/CartView';
import { getItems } from './firebase/firebase';

const App = () => {
  getItems();
  return ( 
    <>
    <CartContextProvider>
      <BrowserRouter>
          <header className='header'>
            <NavBar />
          </header>
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/category/:category' element={ <ItemListContainer /> } />
          <Route path='/item/:id' element={ <ItemDetailContainer /> } />
          <Route path='/cart' element={ <CartView /> } />

          <Route path='/checkout/:orderid' element={ <h1>Gracias por tu compra</h1> } />

          <Route path='*' element={ <h1>404: Página no encontrda</h1> } />
        </Routes>
          <footer>
            <Footer />
          </footer>
      </BrowserRouter>
    </CartContextProvider>
    </>
   );
}
 
export default App;