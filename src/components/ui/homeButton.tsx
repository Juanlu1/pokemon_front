import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export const NavigationButtons = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHome = location.pathname === '/';
  const isCreate = location.pathname === '/pokemon/create';

  return (
    <div className="flex justify-between mb-4">
      {!isHome && (
        <Button variant="outline" onClick={() => navigate('/')}>
          Home
        </Button>
      )}
      {!isCreate && (
        <Button variant="outline" onClick={() => navigate('/pokemon/create')}>
          Crear Nueva Carta
        </Button>
      )}
    </div>
  );
};