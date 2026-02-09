import React from "react";
import ProductCard from "../Components/ProductCard";
import { products } from "../assets/assets";

export default function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        ALL PRODUCTS
      </h2>
      <ProductCard products={products} />
    </div>
  );
}