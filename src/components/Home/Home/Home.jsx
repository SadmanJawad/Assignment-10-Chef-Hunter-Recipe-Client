import React from "react";
import banner from "../../../assets/home-banner.jpg";

const Home = () => {
  return (
      <div
        className="min-h-screen relative bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="bg-neutral opacity-70 min-h-full w-full absolute object-contain ">
          {" "}
        </div>
        <div className="container text-white z-10">
          <span className="text-5xl font-bold text-center">
            {" "}
            Welcome to Sprouted Kitchen! <br /> Find our best recipes{" "}
          </span>
          <p className="text-2xl font-serif mt-4">
            Get inspired by various recipes from my expert experiences. From
            quick healthy meals to family suppers.
          </p>
      <button className="btn bg-purple-700 mt-3 rounded-xl">Read Blogs</button>
      
        </div>
      </div>
  );
};

export default Home;
