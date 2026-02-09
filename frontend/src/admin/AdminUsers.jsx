import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function AdminUsers() {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 flex justify-between items-center">
        Manage Users
      </h1>


      <div className="w-full border border-gray-300 overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-black text-white">
              {["ID", "Name", "Email", "Role"].map((h) => (
                <th key={h} className="px-4 py-3 text-left border">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {users.map(({ id, name, email, role }) => (
              <tr key={id} className="hover:bg-gray-50">
                <td className="px-3 py-2 border">{id}</td>
                <td className="px-3 py-2 border">{name}</td>
                <td className="px-3 py-2 border">{email}</td>
                <td className="px-3 py-2 border">{role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
