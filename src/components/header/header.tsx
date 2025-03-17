import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const Header: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Tambahkan logika play/pause musik di sini
  };

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-pink-100 py-3 px-4 flex justify-between items-center rounded-b-lg shadow-md">
      {/* Logo Placeholder (bisa diganti dengan gambar Pokéball) */}
      <div className="w-8 h-8"></div>

      {/* Pokéball Logo */}
      <img
        src="/src/assets/pokeball.png"
        alt="Pokéball"
        className="w-10 h-10 object-contain"
      />

      {/* Speaker Icon */}
      <button onClick={toggleMusic} className="text-pink-800 text-2xl">
        {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
    </div>
  );
};

export default Header;
