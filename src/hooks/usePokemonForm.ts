import { useState } from "react";
import type { CreatePokemonDto } from "@/types/Pokemon";

export const usePokemonForm = (initialData?: CreatePokemonDto) => {
  const [formData, setFormData] = useState<CreatePokemonDto>(
    initialData || { name: "", type: "", height: 0, weight: 0, imageUrl: "" }
  );

  const handleInputChange = (field: keyof CreatePokemonDto, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return { formData, setFormData, handleInputChange };
};