import './App.css';
import videoclub from './videoclub'

//SPA
import Cabecera from './Cabecera'
import Footer from './Footer'
import Peliculas from './Peliculas'

function App() {
  return (
    <>
      <Cabecera />
      <Peliculas videoclub={videoclub.peliculas} />
      <Footer />
    </>
  );
}

export default App;
