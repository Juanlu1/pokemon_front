import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      className={`transition-all duration-200 hover:shadow-lg ${
        isCompact ? "cursor-pointer hover:scale-105" : ""
      }`}
      onClick={isCompact ? handleCardClick : undefined}
    >
      <CardHeader className="text-center pb-2">
        <img
          src={imageUrl}
          alt={name}
          className="w-20 h-20 object-contain mx-auto mb-2"
        />
        <CardDescription>#{id}</CardDescription>
        <CardTitle className="capitalize">{name}</CardTitle>
      </CardHeader>

      {!isCompact && (
        <CardContent className="text-center space-y-3">
          <Badge variant="secondary" className="capitalize">
            {type}
          </Badge>
          
          <div className="flex justify-center gap-2">
            <Badge variant="outline" className="text-xs">
              {height}m
            </Badge>
            <Badge variant="outline" className="text-xs">
              {weight}kg
            </Badge>
          </div>
        </CardContent>
      )}

      {!isCompact && (
        <CardFooter className="flex gap-2 pt-0">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={onEdit}
            className="flex-1"
          >
            Edit
          </Button>
          <Button 
            size="sm" 
            variant="destructive" 
            onClick={onDelete}
            className="flex-1"
          >
            Delete
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}