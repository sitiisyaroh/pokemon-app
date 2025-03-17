import { useState, useEffect } from "react";
import { getPokemonDetail } from "../services/home";

export const usePokemonDetail = (name: string) => {
  const [pokemonDetail, setPokemonDetail] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!name) return;

    const fetchPokemonDetail = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getPokemonDetail(name);
        setPokemonDetail(data);
        console.log("Fetched Pokémon detail:", data); // Cetak setelah diperbarui
      } catch (err) {
        console.error("Error fetching Pokémon detail:", err);
        setError("Failed to load Pokémon details");
        setPokemonDetail(null); // Reset data jika gagal
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [name]);

  return { pokemonDetail, loading, error };
};
