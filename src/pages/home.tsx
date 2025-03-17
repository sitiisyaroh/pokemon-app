import React, { useState } from "react";
import { usePokemonData } from "../hooks/usePokemonData";
import PokemonCard from "../components/pokemonCard";
import { useNavigate } from "react-router";

const Home: React.FC = () => {
  const { pokemon, fetchNextPage } = usePokemonData();
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate(); // Gunakan navigate

  const itemsPerPage = 20;
  const startIndex = currentPage * itemsPerPage;
  const visiblePokemon = pokemon.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage >= pokemon.length) {
      fetchNextPage();
    }
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handlePokemonClick = (name: string) => {
    navigate(`/detail/${name}`); // Navigasi ke halaman detail
  };

  return (
    <div className="p-5  bg-pink-200 max-w-sm mx-auto  min-h-screen flex flex-col justify-between pt-15 pb-15 font-dynapuff text-xl">
      {/* Pokemon Grid */}
      <div className="grid grid-cols-2 gap-4">
        {visiblePokemon.map((p, index) => (
          <div
            key={index}
            onClick={() => handlePokemonClick(p.name)}
            className="cursor-pointer"
          >
            <PokemonCard name={p.name} url={p.url} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-5 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className={`px-4 py-2 text-white rounded-md ${
            currentPage === 0
              ? "bg-pink-200 cursor-not-allowed"
              : "bg-pink-600 hover:bg-pink-800"
          }`}
        >
          ⬅️ Prev
        </button>

        <button
          onClick={handleNextPage}
          disabled={pokemon.length < (currentPage + 1) * itemsPerPage}
          className={`px-4 py-2 text-white rounded-md ${
            pokemon.length < (currentPage + 1) * itemsPerPage
              ? "bg-pink-200 cursor-not-allowed"
              : "bg-pink-600 hover:bg-pink-800"
          }`}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default Home;
