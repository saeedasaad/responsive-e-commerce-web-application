import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
      {products.map(({ _id, image, name, price }) => (
        <Link
          to={`/products/${_id}`}
          key={_id} className="border border-white hover:border-black rounded-lg transition overflow-hidden">
          <div className="h-56 w-full overflow-hidden">
            <img
              src={image[0]}
              alt={name}
              className="w-full h-full object-cover hover:scale-105 transition-transform"/>
          </div>
          <div className="p-3">
            <h6 className="text-md font-semibold text-gray-800">{name}</h6>
            <p className="text-sm font-bold text-gray-900">${price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}