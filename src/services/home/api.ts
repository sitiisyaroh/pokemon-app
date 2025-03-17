import axiosWithConfig from "../api";

export const getPokemon = async (offset = 0, limit = 20) => {
  try {
    const response = await axiosWithConfig.get(
      `pokemon?offset=${offset}&limit=${limit}`
    );
    return response.data; // Kembalikan data agar bisa digunakan
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    return null;
  }
};

export const getPokemonDetail = async (name: string) => {
  try {
    const response = await axiosWithConfig.get(`pokemon/${name}`);
    return response.data; // Kembalikan data supaya bisa dipakai
  } catch (error) {
    console.error(`Error fetching details for Pokémon ${name}:`, error);
    return null;
  }
};
