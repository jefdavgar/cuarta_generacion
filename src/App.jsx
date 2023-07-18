import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from './components/Pages/Contacto/Contacto';
import Inicio from './components/Pages/Inicio/Inicio'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
