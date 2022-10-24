import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
  <>
    <NavBar />
    <ItemListContainer text="greeting"/>
  </>  
  );
}

export default App;
