import './App.css';
import ItemListContainer from './components/ItemListContainer/index';
import NavBarr from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import CartContextProvider from './components/CartContext';
import CartDetail from './components/CartDetail';
import CartCheckout from './components/CartCheckout';


export default function App() {

  return (
    
    
      <BrowserRouter>
        <CartContextProvider>
          <NavBarr/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/product/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartDetail/>} />
            <Route path='/cart/checkout' element={<CartCheckout/>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
  );
}