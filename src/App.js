import './App.css';
import ItemListContainer from './components/ItemListContainer/index';
import NavBarr from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';


export default function App() {

  return (
    <>
      <NavBarr/>
      <ItemDetailContainer/>
      <ItemListContainer/>
    </>
  );
}