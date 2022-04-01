import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBarr from './components/NavBar';

export default function App() {

  let text = "Bienvenido/a";
  return (
    <>
      <NavBarr/>
      <ItemListContainer mostraElTextoPorfavor={text} />
    </>
  );
}