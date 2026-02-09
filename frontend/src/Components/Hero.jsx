import React from "react";
import { assets } from "../assets/assets";

export default function Hero() {
  const facts = [
    { id: 1, number: "200+", title: "International Brands" },
    { id: 2, number: "2,000+", title: "High-Quality Products" },
    { id: 3, number: "30,000+", title: "Happy Customers" },
  ];

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${assets.hero_img})` }}
    >
      <div className="relative z-10 w-[90%] max-w-6xl text-left">
        <h1 className="text-4xl md:text-7xl font-black mb-4 md:w-1/2">
          FIND CLOTHES THAT MATCH YOUR STYLE
        </h1>
        <p className="text-sm md:text-md mb-6 md:w-1/2">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="mt-6 px-8 py-2 bg-black text-white border rounded-full hover:bg-transparent hover:text-black transition">
          Shop Now
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 w-[50%]">
          {facts.map(({ id, number, title }) => (
            <div key={id} className="p-2">
              <h3 className="text-xl font-bold">{number}</h3>
              <p className="text-sm font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}