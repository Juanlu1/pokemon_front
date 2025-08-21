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
        placeholder="Search by name or type..."
        value={filters.search || ''}
        onChange={(e) => onFiltersChange({ search: e.target.value })}
        className="max-w-sm bg-gray-200 text-black hover:bg-gray-300"
      />
      
      <Select 
        value={filters.orderBy} 
        onValueChange={(value) => onFiltersChange({ orderBy: value as any })}
      >
        <SelectTrigger className="w-32 bg-gray-200 text-black hover:bg-gray-300">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="bg-gray-200 text-black">
          <SelectItem value="id">ID</SelectItem>
          <SelectItem value="name">Name</SelectItem>
        </SelectContent>
      </Select>

      <Select 
        value={filters.orderDir} 
        onValueChange={(value) => onFiltersChange({ orderDir: value as any })}
      >
        <SelectTrigger className="w-32 bg-gray-200 text-black hover:bg-gray-300">
          <SelectValue placeholder="Direction" />
        </SelectTrigger>
        <SelectContent className="bg-gray-200 text-black">
          <SelectItem value="asc">Asc</SelectItem>
          <SelectItem value="desc">Desc</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};