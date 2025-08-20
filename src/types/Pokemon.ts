export interface Pokemon {
  id: number;
  name: string;
  type: string;
  height: number;
  weight: number;
  imageUrl: string;
}

export interface CreatePokemonDto {
  name: string;
  type: string;
  height: number;
  weight: number;
  imageUrl: string;
}

export interface UpdatePokemonDto {
  name?: string;
  type?: string;
  height?: number;
  weight?: number;
  imageUrl?: string;
}

export interface PokemonListResponse {
  data: Pokemon[];
  total: number;
}

export type SortField = 'name' | 'id' | 'type';
export type SortOrder = 'asc' | 'desc';


export interface PokemonFilters {
  page: number;
  pageSize: number;
  search?: string;
  type?: string;
  orderBy?: SortField;
  orderDir?: SortOrder;
}