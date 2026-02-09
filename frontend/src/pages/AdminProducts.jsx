import React, { useState } from "react";
import { products as initialProducts } from "../assets/assets";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

export default function AdminProducts() {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  const handleUpdate = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p._id === id ? { ...p, price: p.price + 10 } : p)),
    );
  };

  const handleAdd = () => {
    const newProduct = {
      _id: Date.now().toString(),
      name: "New Product",
      category: "Misc",
      price: 100,
      image: [],
    };

    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 flex justify-between items-center">
        Manage Products
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 mt-6 px-10 py-3 bg-black text-white text-sm border rounded-full hover:bg-transparent hover:text-black transition"
        >
          <FaPlus /> Add Product
        </button>
      </h1>

      <div className="w-full border border-gray-300 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-black text-white">
              {["Image", "Name", "Category", "Price", "Actions"].map((h) => (
                <th key={h} className="px-4 py-3 text-left border">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="hover:bg-gray-50">
                <td className="px-3 py-2 border">
                  {p.image?.[0] ? (
                    <img
                      src={p.image[0]}
                      alt={p.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-400">No image</span>
                  )}
                </td>

                <td className="px-2 py-2 border">{p.name}</td>
                <td className="px-2 py-2 border">{p.category}</td>
                <td className="px-2 py-2 border">${p.price}</td>

                <td className="px-2 py-2 border">
                  <button onClick={() => handleUpdate(p._id)}>
                    <FaEdit className="hover:scale-105 transition" />
                  </button>
                  <button onClick={() => handleDelete(p._id)}>
                    <FaTrash className="hover:scale-105 transition ml-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
