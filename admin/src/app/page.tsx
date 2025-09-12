// src/App.js
"use client";
import { useState } from "react";
import { Home, Users, Settings } from "lucide-react";
import UsersPage from "./userpage";
import SettingsPage from "./settingspage";

export default function App() {
  const [active, setActive] = useState("Dashboard");

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode(value: boolean): void {
    setDarkMode(value);
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-xl flex flex-col">
        <h1 className="text-2xl font-bold p-4 border-b">Admin Panel</h1>
        <nav className="flex-1 p-4 space-y-2">
          {[
            { name: "Dashboard", icon: <Home size={18} /> },
            { name: "Users", icon: <Users size={18} /> },
            { name: "Settings", icon: <Settings size={18} /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition ${
                active === item.name
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-4">{active}</h2>
        <div className="bg-white rounded-2xl shadow p-6">
          {active === "Dashboard" && <p>📊 Overview</p>}
          {active === "Users" && <UsersPage />}
          {active === "Settings" && <SettingsPage darkMode={darkMode} setDarkMode={toggleDarkMode} />}
        </div>
      </main>
    </div>
  );
}
