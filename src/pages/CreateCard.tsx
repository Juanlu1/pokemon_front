import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PokemonService } from "@/services/PokemonService";
import { PokemonForm } from "@/components/pokemon/PokemonForm";
import { usePokemonForm } from "@/hooks/usePokemonForm";

const CreateCard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { formData, handleInputChange } = usePokemonForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await PokemonService.createPokemon(formData);
      navigate('/');
    } catch (error) {
      console.error('Error creating pokemon:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <Button variant="outline" onClick={() => navigate('/')}>
          Home
        </Button>
      </div>

      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Crear Nueva Carta</CardTitle>
          </CardHeader>
          <CardContent>
            <PokemonForm
              formData={formData}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
              onCancel={() => navigate('/')}
              loading={loading}
              submitText="Crear"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateCard;