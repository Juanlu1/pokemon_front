import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Pokemon } from "@/types/Pokemon";
import { useNavigate } from "react-router-dom";

interface PokemonCardProps extends Pokemon {
  onEdit: () => void;
  onDelete: () => void;
  isCompact?: boolean;
}

export function PokemonCard({
  id,
  name,
  type,
  height,
  weight,
  imageUrl,
  onEdit,
  onDelete,
  isCompact = false,
}: PokemonCardProps) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <Card
      className={`w-48 shadow-md ${isCompact ? "cursor-pointer" : ""}`}
      onClick={isCompact ? handleCardClick : undefined}
    >
      <CardContent className="flex flex-col items-center p-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 object-contain"
        />
        <span className="text-gray-500 text-sm">{id}</span>
        <h3 className="text-lg font-semibold">{name}</h3>

        {isCompact ? (
          
          <div className="mt-2 text-sm text-gray-500">
            <p>Tap to see more</p>
          </div>
        ) : (
          <>
            <div className="flex gap-1 mt-1">
              <span className="text-xs bg-gray-200 px-2 rounded">
                {type}
              </span>
            </div>
            <div className="flex gap-1 mt-1">
              <span className="text-xs bg-gray-200 px-2 rounded">
                {height}m
              </span>
              <span className="text-xs bg-gray-200 px-2 rounded">
                {weight}kg
              </span>
            </div>
            <div className="flex gap-2 mt-3">
              <Button size="sm" variant="outline" onClick={onEdit}>
                Edit
              </Button>
              <Button size="sm" variant="destructive" onClick={onDelete}>
                Delete
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
