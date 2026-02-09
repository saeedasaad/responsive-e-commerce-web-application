import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/assets";
import { CartContext } from "../context/CartContext";
import ProductCard from "../Components/ProductCard";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);
  const { addToCart } = useContext(CartContext);

  if (!product) return <div className="px-4 py-10">Product not found</div>;

  const { name, description, price, image, sizes, category } = product;

  const relatedProducts = products.filter(
    (p) => p.category === category && p._id !== id
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-[400px] object-cover rounded-lg shadow-md"
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p>{description}</p>
          <p className="text-xl font-semibold">${price}</p>

          <div>
            <h3 className="font-semibold mb-2">Available Sizes:</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <span
                  key={size}
                  className="px-3 py-1 border rounded-full text-sm cursor-pointer hover:bg-black hover:text-white transition"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-48 mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-transparent hover:text-black border transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Related Products
          </h2>
          <ProductCard products={relatedProducts.slice(0, 4)} />
        </div>
      )}
    </div>
  );
}