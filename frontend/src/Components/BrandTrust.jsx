import React from "react";
import { assets } from "../assets/assets";

export default function BrandTrust() {
  const brands = [
    assets.brandlogo1,
    assets.brandlogo2,
    assets.brandlogo3,
    assets.brandlogo4,
    assets.brandlogo5,
  ];

  return (
    <div className="bg-black py-8 mb-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
        {brands.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`brand-${i}`}
            className="h-5 object-contain opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
}