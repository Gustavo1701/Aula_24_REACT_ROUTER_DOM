import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';

function App() {

  return (
    <>
      <BrowserRouter>
        <Link to={"/"}>Home</Link>
        <Link to={"/Contato"}>Contato</Link>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
