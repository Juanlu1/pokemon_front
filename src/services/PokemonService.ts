import type { CreatePokemonDto, PokemonFilters, UpdatePokemonDto } from '../types/Pokemon';

const API_URL = import.meta.env.VITE_API_URL;

export class PokemonService {
  static async fetchPokemons(filters: PokemonFilters) {
    const params = new URLSearchParams({
      page: String(filters.page),
      pageSize: String(filters.pageSize),
      ...(filters.search ? { search: filters.search } : {}),
      ...(filters.type ? { type: filters.type } : {}),
      ...(filters.orderBy ? { orderBy: filters.orderBy } : {}),
      ...(filters.orderDir ? { orderDir: filters.orderDir } : {}),
    });
    const response = await fetch(`${API_URL}/pokemons?${params.toString()}`);
    if (!response.ok) throw new Error("Error fetching pokemons");
    return response.json();
  }

  static async getById(id: number) {
    const response = await fetch(`${API_URL}/pokemons/${id}`);
    if (!response.ok) throw new Error("Error fetching pokemon");
    return response.json();
  }

  static async createPokemon(pokemon: CreatePokemonDto) {
    const response = await fetch(`${API_URL}/pokemons`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemon),
    });
    if (!response.ok) throw new Error("Error creating pokemon");
    return response.json();
  }

  static async updatePokemon(id: number, pokemon: UpdatePokemonDto) {
    const response = await fetch(`${API_URL}/pokemons/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemon),
    });
    if (!response.ok) throw new Error("Error updating pokemon");
    return response.json();
  }

  static async deletePokemon(id: number) {
    const response = await fetch(`${API_URL}/pokemons/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Error deleting pokemon");
    return response.json();
  }
}
