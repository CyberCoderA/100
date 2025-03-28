import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import TextField from "../components/TextField";
import "../App.css";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <div className="bg-primary-heavy p-5 h-30 flex items-center justify-between drop-shadow-md">
        <h1 className=" text-5xl font-bold text-dark-heavy hover:cursor-pointer">
          100
        </h1>

        <ul className=" hidden xl:flex flex-row gap-8 text-dark-heavy text-2xl">
          <li className="p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer">
            <a href="#">Explore</a>
          </li>
          <li className="p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer font-bold">
            About
          </li>
          <li className="p-3 hover:bg-gray-600 hover:text-white rounded-md transition-all cursor-pointer">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        <TextField placeholder="Search..." />
        <Bars3Icon
          className="mr-10 xl:hidden size-15 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <div
          className={`absolute xl:hidden top-24 left-0 w-full bg-primary-heavy flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
            isMenuOpen ? "opacity-100" : "hidden"
          }`}
          style={{ transition: "transform 0.3s ease, opacity 0.3 ease" }}
        >
          <li className="list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer font-bold">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer">
            Explore
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer">
            About
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-gray-600 hover:text-white transition-all cursor-pointer">
            <Link to={"/contact"}>Contact</Link>
          </li>
          {/* <li className='list-none w-full flex justify-center pb-5'><TextField placeholder="Search..." /></li> */}
        </div>
      </div>

      <div className="background-img flex justify-center items-center">
        <div className=" flex flex-col items-center text-center">
          <h1 className="text-white text-3xl font-bold italic mb-10 xl:text-7xl">
            About 100
          </h1>
          <p className="text-gray-200 mb-30 w-150 xl:text-4xl xl:w-230">
          100 was created as a passion project, it is a dedication for someone dear to me. If anyone ever stumbles upon this site, feel free to create an account and contribute to the collection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
