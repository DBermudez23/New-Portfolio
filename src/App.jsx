import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import AcercaDeMi from './pages/AcercaDeMi';

function App() {
  return (
    <div className='bg-gradient-to-br from-[#091131] via-[#000000] to-[#091131]'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acerca-de-mi" element={<AcercaDeMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    <Footer />
    </div>
  )
}

export default App;
