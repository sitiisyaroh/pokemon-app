import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import pokemonBg from "../assets/pokemon-bg1.jpg";

const Catch: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pokemon = location.state?.pokemon; // Data from halaman detail
  const [isCaught, setIsCaught] = useState<boolean | null>(null);
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const catchPokemon = () => {
    const success = Math.random() < 0.5; // 50% probability

    if (success) {
      setIsCaught(true);
      setMessage(`Congrats! You've caught Pokémon ${pokemon.name}.`);
    } else {
      setIsCaught(false);
      setMessage("Oh No! The Pokemon got away.");
    }
  };

  const savePokemon = () => {
    if (!nickname.trim()) {
      setError("Nickname cannot be empty!");
      return;
    }

    const caughtPokemons = JSON.parse(
      localStorage.getItem("myPokemons") || "[]"
    );

    // Check if the nickname already exists
    const isNicknameTaken = caughtPokemons.some(
      (p: { nickname: string }) =>
        p.nickname.toLowerCase() === nickname.toLowerCase()
    );

    if (isNicknameTaken) {
      setError("Nickname already taken! Choose a different one.");
      return;
    }

    // Save Pokémon with unique nickname
    caughtPokemons.push({ id: pokemon.id, name: pokemon.name, nickname });
    localStorage.setItem("myPokemons", JSON.stringify(caughtPokemons));

    navigate("/my-pokemon");
  };

  return (
    <div
      className="font-dynapuff text-xl max-w-sm mx-auto h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${pokemonBg})` }}
    >
      <h1 className="text-3xl font-bold text-center text-black capitalize bg-white/50 p-3 rounded-lg shadow-md">
        Wild {pokemon.name} Appear!
      </h1>
      <img src={pokemon.image} alt={pokemon.name} className="w-40 h-40 mt-4" />

      {isCaught === null ? (
        <button
          className="bg-pink-700/70 text-white px-6 py-2 rounded-lg mt-4 font-bold"
          onClick={catchPokemon}
        >
          Catch a Pokémon
        </button>
      ) : isCaught ? (
        <div className="mt-4 text-center bg-white/60 p-4 rounded-lg shadow-md w-11/12 max-w-xs">
          <p className="font-bold text-lg text-black">{message}</p>

          <input
            type="text"
            placeholder="Enter Nickname"
            className="w-full px-4 py-2 text-pink-600 border-2 border-gray-300 rounded-md mt-3 focus:outline-none focus:border-pink-500"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
              setError(""); // Reset error on change
            }}
          />

          {error && <p className="text-red-600 font-bold mt-2">{error}</p>}

          <button
            className="w-full bg-gradient-to-r from-pink-600 to-red-800 text-white font-bold px-4 py-2 rounded-lg mt-3 shadow-lg hover:opacity-80 transition"
            onClick={savePokemon}
          >
            Save Pokémon
          </button>
        </div>
      ) : (
        <p className="font-bold text-lg mt-4">{message}</p>
      )}
    </div>
  );
};

export default Catch;
