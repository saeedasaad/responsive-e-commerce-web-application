import React from "react";
import ProductSection from "./ProductSection";

export default function BestsellerProducts() {
  return <ProductSection title="BEST SELLERS" filterFn={(p) => p.bestseller} />;
}