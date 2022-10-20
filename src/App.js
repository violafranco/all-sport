import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


const App = () => {
  return ( 
    <>
      <header className='header'>
        <NavBar />
      </header>
      <main>
        <section className='listContainer'>
          <ItemListContainer greeting='Cards container'/>
        </section>
      </main>
    </>
   );
}
 
export default App;