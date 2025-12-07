import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Planos from "./pages/planos.jsx";
import Marketplace from "./pages/marketplace.jsx";
import Sobre from "./pages/sobre.jsx";
import First from "./pages/First.jsx";
import Navbar from "./components/Navbar.jsx";
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode(); // hook global

  return (
    <div className="min-h-screen bg-dust-50 dark:bg-homem-1000 transition-colors duration-300">
      {/* Navbar recebe darkMode via props */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/home" element={<Home />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  );
}

export default App;
