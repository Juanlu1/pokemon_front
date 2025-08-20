import { useState, useEffect } from 'react';
import { PokemonService } from '../services/PokemonService';
import type { PokemonFilters, PokemonListResponse } from '../types/Pokemon';

export const usePokemons = (filters: PokemonFilters) => {
  const [pokemons, setPokemons] = useState<PokemonListResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await PokemonService.fetchPokemons(filters);
        setPokemons(data);
      } catch (error) {
        setError("Failed to fetch pokemons");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return { pokemons, loading, error };
};
