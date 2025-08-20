import { useState } from 'react';
import type { PokemonFilters } from '@/types/Pokemon';

export const useFilters = () => {
  const [filters, setFilters] = useState<PokemonFilters>({
    page: 1,
    pageSize: 20,
    orderBy: 'id',
    orderDir: 'asc'
  });

  const updateFilters = (newFilters: Partial<PokemonFilters>) => {
    setFilters(prev => ({ 
      ...prev, 
      ...newFilters, 
      page: 1
    }));
  };

  return { filters, updateFilters };
};