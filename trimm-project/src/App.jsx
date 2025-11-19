import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar simples de exemplo */}
      <nav className="flex gap-6 mb-10 border-b pb-3">
        <Link to="/" className="text-blue-600 font-medium hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-blue-600 font-medium hover:underline">
          About
        </Link>
      </nav>

      {/* Rotas */}
      <Routes>
        <Route path="/" element={<Home />} />
    
      </Routes>
    </div>
  );
}

export default App;
