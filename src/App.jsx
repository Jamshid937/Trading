
import './App.css';
import Carusel from './components/Carusel/Carusel';
import Collapse from './components/Collapse/Collapse';
import Fakt from './components/Fakt/Fakt';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import Plan from './components/Plan/Plan';
import Tarif from './components/Tarif/Tarif';

function App() {
  return (
<>
<Header/>
<Main/>
<Plan/>
<Fakt />
<Carusel></Carusel>
<Modal></Modal>
<Tarif/>
<Collapse/>
</>
  );
}

export default App;
