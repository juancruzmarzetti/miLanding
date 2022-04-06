import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBarr from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  let text = "Bienvenido/a";
  return (
    <>
      <NavBarr/>
      <ItemListContainer mostraElTextoPorfavor={text} />
    </>
  );
}