import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
 <div>
  <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
    </Routes>
  </BrowserRouter>
 </div>
  );
}

export default App;
