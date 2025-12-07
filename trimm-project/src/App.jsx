import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import Planos from "./pages/planos.jsx";
import Marketplace from "./pages/marketplace.jsx";
import Sobre from "./pages/sobre.jsx";
function App() {
  return (
    <div>
      
      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </div>
  );
}

export default App;
