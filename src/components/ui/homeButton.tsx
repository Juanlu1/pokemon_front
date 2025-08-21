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
        <Button variant="outline" className="bg-gray-200 text-black hover:bg-gray-300" onClick={() => navigate('/')}>
          Home
        </Button>
      )}
      {!isCreate && (
        <Button variant="outline" className="bg-gray-200 text-black hover:bg-gray-300" onClick={() => navigate('/pokemon/create')}>
          Create New Card
        </Button>
      )}
    </div>
  );
};