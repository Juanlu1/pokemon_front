import { useState, useEffect } from "react";
import { PokemonService } from "@/services/PokemonService";
import type { Pokemon } from "@/types/Pokemon";

export const usePokemon = (id: number | null) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await PokemonService.getById(id);
        setPokemon(data);
      } catch (err) {
        setError('Error cargando pokemon');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  return { pokemon, loading, error };
};