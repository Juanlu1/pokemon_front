// src/pages/Home.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface PokemonCard {
  id: number;
  name: string;
  type: string;
  image: string;
}

export function Home() {
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // límite de cartas por página

  // Esto simula un fetch desde tu API
  useEffect(() => {
    // Aquí deberías hacer fetch a tu backend / API
    const fetchCards = async () => {
      // fetch(`/api/cards?search=${search}&type=${filterType}&page=${page}&limit=${limit}`)
      //   .then(res => res.json())
      //   .then(data => setCards(data))
      // Por ahora mock:
      const mockCards: PokemonCard[] = Array.from({ length: 50 }).map((_, i) => ({
        id: i + 1,
        name: `Pokemon ${i + 1}`,
        type: i % 2 === 0 ? "Fuego" : "Agua",
        image: `https://picsum.photos/200/200?random=${i + 1}`,
      }));
      const filtered = mockCards
        .filter(card => card.name.toLowerCase().includes(search.toLowerCase()))
        .filter(card => filterType ? card.type === filterType : true);
      const paginated = filtered.slice((page - 1) * limit, page * limit);
      setCards(paginated);
    };
    fetchCards();
  }, [search, filterType, page, limit]);

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Pokédex</h1>
        <Button onClick={() => console.log("Crear carta")}>Crear carta</Button>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 mb-4">
        <Input 
          placeholder="Buscar por nombre"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Select onValueChange={setFilterType}>
          <SelectTrigger>
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Fuego">Fuego</SelectItem>
            <SelectItem value="Agua">Agua</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Lista de cartas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map(card => (
          <Card key={card.id} className="p-4 relative">
            <img src={card.image} alt={card.name} className="w-full h-40 object-cover mb-2 rounded" />
            <h2 className="font-bold">{card.name}</h2>
            <p>Tipo: {card.type}</p>
            <div className="flex gap-2 mt-2">
              <Button size="sm" onClick={() => console.log("Editar", card.id)}>Editar</Button>
              <Button size="sm" variant="destructive" onClick={() => console.log("Borrar", card.id)}>Borrar</Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-4 gap-2">
        <Button size="sm" onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Anterior</Button>
        <span className="flex items-center">Página {page}</span>
        <Button size="sm" onClick={() => setPage(prev => prev + 1)}>Siguiente</Button>
      </div>
    </div>
  );
}
