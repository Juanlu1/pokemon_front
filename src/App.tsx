import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ReadCard from "./pages/ReadCard";
import CreateCard from "./pages/CreateCard";
import EditCard from "./pages/EditCard";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon/:id" element={<ReadCard />} />
        <Route path="/pokemon/create" element={<CreateCard />} />
        <Route path="/pokemon/edit/:id" element={<EditCard />} />
      </Routes>
    </BrowserRouter>
  );
}
