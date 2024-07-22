import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineBulb,
  AiOutlineAppstore,
} from "react-icons/ai";
import { FaPuzzlePiece } from "react-icons/fa";
import HeaderLogo from "../assets/Header-Logo.png";

function Component() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-full flex flex-col text-center bg-[#FAF2FF]">
      <header className="flex items-center justify-between pt-12 px-12 w-full ">
        <div className="flex items-center gap-4">
          <img src={HeaderLogo} alt="Logo" className="h-[120px] w-[120px]" />
        </div>
        <nav
          className={`md:flex gap-6 justify-evenly flex-1 text-lg ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <a href="#" className="text-gray-700">
            Home
          </a>
          <a href="#" className="text-gray-700">
            About
          </a>
          <a href="#" className="text-gray-700">
            Learn
          </a>
          <a href="#" className="text-gray-700">
            Play
          </a>
          <a href="#" className="text-gray-700">
            Explore
          </a>
          <a href="#" className="text-gray-700">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-black font-bold">EN</span>
          <button className="px-12 py-4 bg-[#380760] text-white rounded-lg">
            Log in
          </button>
          <button
            className="p-2 bg-white border rounded"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <AiOutlineClose className="h-6 w-6 text-gray-700" />
            ) : (
              <AiOutlineMenu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center py-16 w-full flex-grow">
        <h2 className="text-pink-500 text-3xl mb-4">
          Navigating Emotional Turbulence
        </h2>
        <h1 className="text-5xl font-bold text-purple-900 mb-4">
          to Slove Encourage Thrive
        </h1>
        <p className="text-gray-700 mb-12 max-w-2xl">
          Where you nurture your mind & unleash your potential by discovering{" "}
          <br />
          the power of psychology for a healthier, happier you.
        </p>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl">
          <div className="p-6 bg-[#380760] text-white rounded-2xl flex flex-row items-center">
            <AiOutlineBulb className="h-16 w-16 bg-[#4C2171] p-4 rounded-lg" />
            <div className="flex flex-1 flex-col text-left pl-8">
              <h3 className="text-xl font-bold">Learn+</h3>
              <p>Messages, Chat, Video</p>
            </div>
          </div>
          <div className="p-6 bg-white text-gray-700 rounded-2xl flex flex-row items-center">
            <FaPuzzlePiece className="h-16 w-16 p-4 rounded-lg bg-[#ECE6F0]" />
            <div className="flex flex-1 flex-col text-left pl-8">
              <h3 className="text-xl font-bold">Play+</h3>
              <p>Successful Treatment</p>
            </div>
          </div>
          <div className="p-6 bg-white text-gray-700 rounded-2xl flex flex-row items-center">
            <AiOutlineAppstore className="h-16 w-16 p-4 rounded-lg bg-[#FAF2FF]" />
            <div className="flex flex-1 flex-col text-left pl-8">
              <h3 className="text-xl font-bold">Explore++</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Component;
