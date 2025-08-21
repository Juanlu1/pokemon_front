import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { CreatePokemonDto } from "@/types/Pokemon";

interface PokemonFormProps {
  formData: CreatePokemonDto;
  onInputChange: (field: keyof CreatePokemonDto, value: string | number) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  loading: boolean;
  submitText: string;
}

export const PokemonForm = ({
  formData,
  onInputChange,
  onSubmit,
  onCancel,
  loading,
  submitText
}: PokemonFormProps) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <div>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        value={formData.name}
        onChange={(e) => onInputChange('name', e.target.value)}
        placeholder="Name of the Pokémon"
        required
      />
    </div>

    <div>
      <Label htmlFor="type">Type</Label>
      <Input
        id="type"
        value={formData.type}
        onChange={(e) => onInputChange('type', e.target.value)}
        placeholder="Type of the Pokémon"
        required
      />
    </div>

    <div>
      <Label htmlFor="height">Height (m)</Label>
      <Input
        id="height"
        type="number"
        step="0.1"
        value={formData.height}
        onChange={(e) => onInputChange('height', Number(e.target.value))}
        required
      />
    </div>

    <div>
      <Label htmlFor="weight">Weight (kg)</Label>
      <Input
        id="weight"
        type="number"
        step="0.1"
        value={formData.weight}
        onChange={(e) => onInputChange('weight', Number(e.target.value))}
        required
      />
    </div>

    <div>
      <Label htmlFor="imageUrl">Image URL</Label>
      <Input
        id="imageUrl"
        type="url"
        value={formData.imageUrl}
        onChange={(e) => onInputChange('imageUrl', e.target.value)}
        required
      />
    </div>

    <div className="flex gap-2 pt-4">
      <Button type="button" variant="outline" className="flex-1 bg-gray-200 text-black hover:bg-gray-300" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit" variant="outline" disabled={loading} className="flex-1 bg-gray-200 text-black hover:bg-gray-300">
        {loading ? 'Saving...' : submitText}
      </Button>
    </div>
  </form>
);