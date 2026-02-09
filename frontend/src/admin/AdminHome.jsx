import React from "react";

export default function AdminHome() {
  const stats = [
    { title: "Total Users", value: 1200 },
    { title: "Total Orders", value: 350 },
    { title: "Revenue", value: "$45,000" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <p className="text-gray-600 mb-8">Welcome back, Admin!</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.title} className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="text-2xl font-bold mt-2">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}