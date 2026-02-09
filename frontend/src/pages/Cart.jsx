import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (!cartItems.length) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-xl font-semibold text-gray-700">Your cart is empty</h2>
      </div>
    );
  }

  const total = cartItems.reduce((sum, { price }) => sum + price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-black text-white">
            {["Image", "Name", "Price", "Delete"].map((head) => (
              <th key={head} className="border px-4 py-2 text-left">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ _id, name, price, image }) => (
            <tr key={_id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">
                <img src={image[0]} alt={name} className="w-10 h-10 object-cover rounded" />
              </td>
              <td className="border px-4 py-2">{name}</td>
              <td className="border px-4 py-2">${price}</td>
              <td className="border px-4 py-2">
                <button onClick={() => removeFromCart(_id)} className="text-black">
                  <FaTrash className="w-4 h-4 hover:scale-105 transition" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">Total: ${total}</p>
      </div>
    </div>
  );
}