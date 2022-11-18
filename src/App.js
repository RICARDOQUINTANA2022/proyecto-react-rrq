import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar';


function App() {
  return (
<div style={{background:"black"}}>
  <BrowserRouter>
    <NavBar />

    <Routes>
    <Route path="/" element={<ItemListContainer />}/>
    <Route path="/category/:categoryid" element={<ItemListContainer/>}/>
    <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
    </Routes>

  </BrowserRouter>
</div>
  );
}

export default App;
