import React from "react";

interface PokemonMovesProps {
  moves: { move: { name: string } }[];
}

const PokemonMoves: React.FC<PokemonMovesProps> = ({ moves }) => {
  return (
    <div className="bg-pink-300 p-4 rounded-lg w-full max-w-md shadow-lg">
      <p className="text-lg font-bold">Moves:</p>
      {moves.slice(0, 5).map((move) => (
        <p className="capitalize" key={move.move.name}>
          {move.move.name}
        </p>
      ))}
    </div>
  );
};

export default PokemonMoves;
