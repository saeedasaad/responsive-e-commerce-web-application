import React, { useState } from "react";

export default function AdminSettings() {
  const [siteName, setSiteName] = useState("Shop.co");
  const [theme, setTheme] = useState("Light");
  const [maintenance, setMaintenance] = useState(false);

  const handleSave = () => {
    alert("Settings saved (frontend simulation only).");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="space-y-6 max-w-lg">

        <div>
          <label className="block font-medium mb-2">Site Name</label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
          />
        </div>


        <div>
          <label className="block font-medium mb-2">Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black"
          >
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>


        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={maintenance}
            onChange={() => setMaintenance(!maintenance)}
            className="w-4 h-4"
          />
          <label className="font-medium">Enable Maintenance Mode</label>
        </div>


        <button
          onClick={handleSave}
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
``