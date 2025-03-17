import React from "react";

interface PokemonImageProps {
  id: number; // Tambahkan ID Pokémon
  type: string;
}

const PokemonImage: React.FC<PokemonImageProps> = ({ id, type }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div className=" p-3 rounded-lg flex flex-col items-center">
      <img src={imageUrl} alt={type} className="w-25 h-25" />
      <span className="bg-pink-700 text-white px-3 py-1 mt-2 rounded-md text-sm font-bold">
        {type.toUpperCase()}
      </span>
    </div>
  );
};

export default PokemonImage;
