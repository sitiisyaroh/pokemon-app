import React from "react";

interface PokemonInfoProps {
  name: string;
  weight: number;
  height: number;
}

const PokemonInfo: React.FC<PokemonInfoProps> = ({ name, weight, height }) => {
  return (
    <div className=" p-4 rounded-lg w-full max-w-md ">
      <p className="text-lg font-bold">Profile: </p>
      <p className="text-lg font-bold">{name.toUpperCase()}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default PokemonInfo;
