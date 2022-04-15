import './App.css';
import ItemListContainer from './components/ItemListContainer/index';
import NavBarr from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {

  return (
    <>
      <BrowserRouter>
        <NavBarr/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/product/:id' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}