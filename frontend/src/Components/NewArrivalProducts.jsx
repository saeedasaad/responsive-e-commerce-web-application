import React from "react";
import ProductSection from "./ProductSection";

export default function NewArrivalProducts() {
  return <ProductSection title="NEW ARRIVALS" filterFn={(p) => p.newArrivals} />;
}