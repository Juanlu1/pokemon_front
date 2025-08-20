import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { PokemonFilters } from "@/types/Pokemon";

interface Props {
  filters: PokemonFilters;
  onFiltersChange: (filters: Partial<PokemonFilters>) => void;
}

export const PokemonFilterBar = ({ filters, onFiltersChange }: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <Input
        placeholder="Buscar por nombre o id..."
        value={filters.search || ''}
        onChange={(e) => onFiltersChange({ search: e.target.value })}
        className="max-w-sm"
      />
      
      <Select 
        value={filters.orderBy} 
        onValueChange={(value) => onFiltersChange({ orderBy: value as any })}
      >
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="id">ID</SelectItem>
          <SelectItem value="name">Nombre</SelectItem>
        </SelectContent>
      </Select>

      <Select 
        value={filters.orderDir} 
        onValueChange={(value) => onFiltersChange({ orderDir: value as any })}
      >
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Dirección" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">↑ A-Z</SelectItem>
          <SelectItem value="desc">↓ Z-A</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};