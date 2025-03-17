import React from "react";

interface PokemonCardProps {
  name: string;
  url: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  // Ambil ID dari URL API (angka terakhir dalam URL)
  const id = url.split("/").filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div className="text-center p-4 border border-pink-200 rounded-lg shadow-md bg-pink-50">
      <img
        src={imageUrl}
        alt={name}
        className="w-32 h-32 mx-auto"
        loading="lazy"
      />
      <p className="capitalize font-bold bg-pink-400 text-white px-3 py-1 rounded-md">
        {name}
      </p>
    </div>
  );
};

export default PokemonCard;
