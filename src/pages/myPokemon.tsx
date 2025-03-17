import React, { useState, useEffect } from "react";

const MyPokemon: React.FC = () => {
  const [myPokemons, setMyPokemons] = useState<
    { id: number; name: string; nickname: string }[]
  >([]);

  useEffect(() => {
    const storedPokemons = JSON.parse(
      localStorage.getItem("myPokemons") || "[]"
    );
    setMyPokemons(storedPokemons);
  }, []);

  const releasePokemon = (nickname: string) => {
    const updatedPokemons = myPokemons.filter(
      (pokemon) => pokemon.nickname !== nickname
    );
    setMyPokemons(updatedPokemons);
    localStorage.setItem("myPokemons", JSON.stringify(updatedPokemons));
  };

  return (
    <div className="font-dynapuff text-xl max-w-sm mx-auto p-4 bg-pink-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4 mt-10 text-pink-700">
        My Pokémon
      </h1>
      {myPokemons.length === 0 ? (
        <p className="text-center text-gray-600">No Pokémon caught yet!</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {myPokemons.map((pokemon, index) => (
            <div
              key={index}
              className="relative bg-pink-100 p-3 rounded-lg shadow-md flex flex-col items-center"
            >
              <button
                onClick={() => releasePokemon(pokemon.nickname)}
                className="absolute top-2 right-2 text-pink-800 hover:text-red-400 text-xl"
              >
                ❌
              </button>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
                alt={pokemon.name}
                className="w-20 h-20"
              />
              <p className="text-center font-bold mt-2">{pokemon.nickname}</p>
              <p className="text-center text-gray-600 text-sm">
                ({pokemon.name})
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPokemon;
