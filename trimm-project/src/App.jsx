import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home.jsx";
import Planos from "./pages/planos.jsx";
import Marketplace from "./pages/marketplace.jsx";
import Sobre from "./pages/sobre.jsx";
import AuthPage from "./pages/auth.jsx";
import First from "./pages/First.jsx";
import Navbar from "./components/Navbar.jsx";
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const location = useLocation(); // ← pega a rota atual

  const hideNavbar = location.pathname === "/" || location.pathname === "/auth"; // ← agora funciona

  return (
    <div className="min-h-screen bg-dust-50 dark:bg-homem-1000 transition-colors duration-300">

      {/* Só aparece se NÃO estiver na página inicial */}
      {!hideNavbar && (
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      )}

      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/home" element={<Home />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
