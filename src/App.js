import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


const App = () => {
  return ( 
    <>
      <BrowserRouter>
          <header className='header'>
            <NavBar />
          </header>
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/category/:category' element={ <ItemListContainer /> } />
          <Route path='/item/:id' element={ <ItemDetailContainer /> } />
        </Routes>
          <footer>
            <Footer />
          </footer>
      </BrowserRouter>
    </>
   );
}
 
export default App;