import './App.css';
import ItemListContainer from './components/ItemListContainer/index';
import NavBarr from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {

  return (
    <>
      <NavBarr/>
      <ItemListContainer/>
    </>
  );
}