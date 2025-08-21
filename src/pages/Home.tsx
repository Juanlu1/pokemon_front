import { PokemonCard } from "@/components/pokemon/PokemonCard";
import { PokemonFilterBar } from "@/components/pokemon/PokemonFilter";
import { PokemonPagination } from "@/components/pokemon/PokemonPagination";
import { Button } from "@/components/ui/button";
import { useFilters } from "@/hooks/useFilters";
import { usePokemons } from "@/hooks/usePokemons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { filters, updateFilters, setPage } = useFilters();
  const { pokemons, loading, error } = usePokemons(filters);
  const navigate = useNavigate();

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <PokemonFilterBar 
          filters={filters} 
          onFiltersChange={updateFilters} 
        />
        <Button variant="outline" className="flex bg-gray-200 text-black hover:bg-gray-300" onClick={() => navigate('/pokemon/create')}>
          Create New Card
        </Button>
      </div>

      {loading && (
        <div className="text-center py-8">
          <p>Loading...</p>
        </div>
      )}
      
      {error && (
        <div className="text-center py-8 text-red-500">
          <p>{error}</p>
        </div>
      )}

      {pokemons?.data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pokemons.data.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              imageUrl={pokemon.imageUrl}
              height={pokemon.height}
              weight={pokemon.weight}
              onEdit={() => {}}
              onDelete={() => {}}
              isCompact={true}
            />
          ))}
        </div>
      )}

      {pokemons && pokemons.data.length > 0 && (
        <PokemonPagination
          page={filters.page}
          setPage={setPage}
          total={pokemons.total}
          limit={filters.pageSize}
        />
      )}

      {pokemons?.data.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          <p>No se encontraron pokémons</p>
        </div>
      )}
    </div>
  );
};

export default Home;