import React from "react";
import { useParams } from "react-router";
import { usePokemonDetail } from "../hooks/usePokemonDetail";
import PokemonImage from "../components/detailComponents/pokemonImage";
import PokemonStats from "../components/detailComponents/pokemonStats";
import PokemonInfo from "../components/detailComponents/pokemonInfo";
import PokemonAbilities from "../components/detailComponents/pokemonAbilities";
import PokemonMoves from "../components/detailComponents/pokemonMoves";
import { useNavigate } from "react-router";
const Detail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { pokemonDetail, loading } = usePokemonDetail(name || "");
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (!pokemonDetail) return <div>Pokémon not found!</div>;

  return (
    <div className="p-5 font-dynapuff text-xl  bg-pink-200 max-w-sm mx-auto  min-h-screen pt-15 pb-15 grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center">
        <PokemonImage
          id={pokemonDetail.id}
          type={pokemonDetail.types?.[0]?.type?.name}
        />
      </div>
      <div className=" flex flex-col items-center w-full ">
        <PokemonInfo
          name={pokemonDetail.name}
          weight={pokemonDetail.weight}
          height={pokemonDetail.height}
        />
      </div>

      <div className="col-span-2 flex flex-col items-center">
        <PokemonStats stats={pokemonDetail.stats} />
      </div>

      <div className="flex flex-col items-center">
        <PokemonMoves moves={pokemonDetail.moves} />
      </div>

      <div className="flex flex-col items-center">
        <PokemonAbilities abilities={pokemonDetail.abilities} />
      </div>

      <div className="col-span-2 flex flex-col items-center ">
        <button
          onClick={() =>
            navigate("/catch", {
              state: {
                pokemon: {
                  id: pokemonDetail.id,
                  name: pokemonDetail.name,
                  image:
                    pokemonDetail.sprites?.other["official-artwork"]
                      .front_default,
                },
              },
            })
          }
          className="bg-pink-800 text-white font-extrabold py-2 px-4 rounded-md hover:bg-pink-600"
        >
          Catch
        </button>
      </div>
    </div>
  );
};
export default Detail;
