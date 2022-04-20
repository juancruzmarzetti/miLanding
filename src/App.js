import './App.css';
import ItemListContainer from './components/ItemListContainer/index';
import NavBarr from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import CartContextProvider from './components/CartContext';
import CartDetail from './components/CartDetail';


export default function App() {

  return (
    
    <CartContextProvider>
      <BrowserRouter>
          <NavBarr/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/product/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartDetail/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    
  );
}