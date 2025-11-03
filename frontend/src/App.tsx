import { BrowserRouter, Routes, Route, Navigate,  } from 'react-router-dom';
import Home from './pages/Home';
import HeroDetail from './pages/HeroDetail';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';


function App() {
return (
  <BrowserRouter>
<div className="d-flex flex-column min-vh-100">
      <Header/>
      <main className="flex-grow-1 container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heroes/id/:id" element={<HeroDetail />} />
          <Route path='/redirect' element={<Navigate to='/' />} />
        </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
    )}

export default App;
