import { useParams, useNavigate } from "react-router-dom";
import { PokemonService } from "@/services/PokemonService";
import { usePokemon } from "@/hooks/usePokemon";
import { NavigationButtons } from "@/components/ui/homeButton";
import { PokemonCard } from "@/components/pokemon/PokemonCard";

const ReadCard = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { pokemon, loading } = usePokemon(Number(id));

  const handleEdit = () => navigate(`/pokemon/${id}/edit`);
  
  const handleDelete = async () => {
    if (confirm(`¿Eliminar ${pokemon?.name}?`)) {
      await PokemonService.deletePokemon(Number(id));
      navigate('/');
    }
  };

  if (loading) return <div className="p-6 text-center">Cargando...</div>;
  if (!pokemon) return <div className="p-6 text-center">Pokemon no encontrado</div>;

  return (
    <div className="p-6">
      <NavigationButtons />
      <div className="max-w-md mx-auto mt-16">
        <PokemonCard
          {...pokemon}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isCompact={false}
        />
      </div>
    </div>
  );
};

export default ReadCard;