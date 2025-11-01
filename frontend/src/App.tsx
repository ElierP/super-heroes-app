import Home from './pages/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css';


function App() {
return (
<div className="d-flex flex-column min-vh-100">
      <Header/>
      <main className="flex-grow-1 container py-4">
        <Home/>
      </main>
      <Footer/>
    </div>
    )}

export default App;
