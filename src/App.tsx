import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ReadCard from "./pages/ReadCard";
import CreateCard from "./pages/CreateCard";
import EditCard from "./pages/EditCard";
import pokemonBackground from "./assets/pokemonBackground.jpg";

export function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-center" style={{ backgroundImage: `url(${pokemonBackground})`, opacity: 0.4 }} />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/pokemon/:id" element={<ReadCard />} />
            <Route path="/pokemon/create" element={<CreateCard />} />
            <Route path="/pokemon/edit/:id" element={<EditCard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
