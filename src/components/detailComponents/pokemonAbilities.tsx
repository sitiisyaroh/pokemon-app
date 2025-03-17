import React from "react";

interface PokemonAbilitiesProps {
  abilities: { ability: { name: string } }[];
}

const PokemonAbilities: React.FC<PokemonAbilitiesProps> = ({ abilities }) => {
  return (
    <div className="bg-pink-300 p-4 rounded-lg w-full max-w-md shadow-lg">
      <p className="text-lg font-bold">Abilities:</p>
      {abilities.map((ability) => (
        <p className="capitalize" key={ability.ability.name}>
          {ability.ability.name}
        </p>
      ))}
    </div>
  );
};

export default PokemonAbilities;
