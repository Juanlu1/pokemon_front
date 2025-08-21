import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PokemonService } from "@/services/PokemonService";
import { NavigationButtons } from "@/components/ui/navigationButtons";
import { usePokemon } from "@/hooks/usePokemon";
import { PokemonForm } from "@/components/pokemon/PokemonForm";
import { usePokemonForm } from "@/hooks/usePokemonForm";

const EditCard = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { pokemon, loading: loadingPokemon } = usePokemon(Number(id));
  const [loading, setLoading] = useState(false);
  const { formData, setFormData, handleInputChange } = usePokemonForm();

  useEffect(() => {
    if (pokemon) {
      setFormData({
        name: pokemon.name,
        type: pokemon.type,
        height: pokemon.height,
        weight: pokemon.weight,
        imageUrl: pokemon.imageUrl,
      });
    }
  }, [pokemon, setFormData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await PokemonService.updatePokemon(Number(id), formData);
      navigate(`/pokemon/${id}`);
    } catch (error) {
      console.error('Error updating pokemon:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loadingPokemon) return <div className="p-6 text-center">Loading...</div>;
  if (!pokemon) return <div className="p-6 text-center">Pokemon not found</div>;

  return (
    <div className="p-6">
      <NavigationButtons />
      <div className="max-w-md mx-auto mt-8">
        <Card className="bg-white shadow-md">
          <CardHeader className="text-center">
            <CardTitle>Edit {pokemon.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <PokemonForm
              formData={formData}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
              onCancel={() => navigate(`/pokemon/${id}`)}
              loading={loading}
              submitText="Save"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EditCard;