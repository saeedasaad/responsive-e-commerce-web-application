import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../assets/assets";
import { Link } from "react-router-dom";

export default function ProductSection({ title, filterFn }) {
  const filtered = products.filter(filterFn);
  if (!filtered.length) return null; 

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">{title}</h2>
      <ProductCard products={filtered} />
      <div className="flex justify-center">
        <Link
          to="/products"
          className="mt-6 px-8 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
        >
          View All
        </Link>
      </div>
    </div>
  );
}