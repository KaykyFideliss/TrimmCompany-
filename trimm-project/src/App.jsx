import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import First from "./pages/First.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
   
    <div>
      {/* Rotas */}
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
