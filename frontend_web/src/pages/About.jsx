import React from "react";
import "../App.css";
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar activeRoute="/about"/>

      <div className="background-img flex justify-center items-center">
        <div className=" flex flex-col items-center text-center">
          <h1 className="text-white text-3xl font-bold italic mb-10 xl:text-7xl">
            About 100
          </h1>
          <p className="text-gray-200 mb-30 w-80 xl:text-4xl xl:w-230">
          100 was created as a passion project, it is a dedication for someone dear to me. If anyone ever stumbles upon this site, feel free to create an account and contribute to the collection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
