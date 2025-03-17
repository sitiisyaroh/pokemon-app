import React from "react";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import { GiPokecog } from "react-icons/gi"; // Icon Pokémon Collection

const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-pink-100 py-3 px-4 flex justify-evenly items-center rounded-t-lg shadow-md">
      <Link to="/" className="flex flex-col items-center">
        <FaHome className="text-3xl text-pink-800" />
      </Link>

      <Link to="/my-pokemon" className="flex flex-col items-center">
        <GiPokecog className="text-3xl text-pink-800" />
      </Link>
    </div>
  );
};

export default Footer;
