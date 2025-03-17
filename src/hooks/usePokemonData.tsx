import { useState, useEffect, useRef } from "react";
import { getPokemon } from "../services/home";

export const usePokemonData = () => {
  const [pokemon, setPokemon] = useState<{ name: string; url: string }[]>([]);

  const [page, setPage] = useState(0);
  const isFirstFetch = useRef(true); // Menandai fetch pertama kali

  const fetchPokemon = async (offset = 0) => {
    try {
      const data = await getPokemon(offset);
      if (data) {
        setPokemon((prev) => [...prev, ...data.results]);
      }
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  };

  useEffect(() => {
    if (isFirstFetch.current) {
      isFirstFetch.current = false; // Cegah fetch ganda saat pertama kali render
      return;
    }
    const offset = page * 20;
    fetchPokemon(offset);
  }, [page]);

  console.log(pokemon);

  const fetchNextPage = () => {
    setPage((prev) => prev + 1);
  };

  return { pokemon, fetchNextPage };
};
