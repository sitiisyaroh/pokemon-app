import React from "react";

interface PokemonStatsProps {
  stats: { stat: { name: string }; base_stat: number }[];
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
  return (
    <div className="bg-pink-300 car p-3 rounded-lg w-full max-w-md shadow-lg">
      <p className="text-lg font-bold">Stats</p>
      {stats.map((stat) => (
        <div key={stat.stat.name} className="mb-2">
          <p className="text-sm capitalize">
            {stat.stat.name} : {stat.base_stat}
          </p>
          <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
            <div
              className="bg-pink-700 h-2"
              style={{ width: `${stat.base_stat}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonStats;
