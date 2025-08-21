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
      <Label htmlFor="name">Nombre</Label>
      <Input
        id="name"
        value={formData.name}
        onChange={(e) => onInputChange('name', e.target.value)}
        placeholder="Nombre del Pokémon"
        required
      />
    </div>

    <div>
      <Label htmlFor="type">Tipo</Label>
      <Input
        id="type"
        value={formData.type}
        onChange={(e) => onInputChange('type', e.target.value)}
        placeholder="Tipo del Pokémon"
        required
      />
    </div>

    <div>
      <Label htmlFor="height">Altura (m)</Label>
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
      <Label htmlFor="weight">Peso (kg)</Label>
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
      <Label htmlFor="imageUrl">URL de Imagen</Label>
      <Input
        id="imageUrl"
        type="url"
        value={formData.imageUrl}
        onChange={(e) => onInputChange('imageUrl', e.target.value)}
        required
      />
    </div>

    <div className="flex gap-2 pt-4">
      <Button type="button" variant="outline" onClick={onCancel} className="flex-1">
        Cancelar
      </Button>
      <Button type="submit" disabled={loading} className="flex-1">
        {loading ? 'Guardando...' : submitText}
      </Button>
    </div>
  </form>
);