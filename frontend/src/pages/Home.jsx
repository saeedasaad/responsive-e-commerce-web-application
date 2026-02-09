import React from "react";
import Hero from "../Components/Hero";
import BrandTrust from "../Components/BrandTrust";
import NewArrivalProducts from "../Components/NewArrivalProducts";
import BestsellerProducts from "../Components/BestsellerProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandTrust />
      <NewArrivalProducts />
      <BestsellerProducts />
    </>
  );
}