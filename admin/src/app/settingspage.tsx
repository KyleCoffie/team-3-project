import { useState } from "react";

type SettingsProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

export default function SettingsPage({ darkMode, setDarkMode }: SettingsProps) {
  const [language, setLanguage] = useState("en");
  const [timeZone, setTimeZone] = useState("UTC");
  const [notifications, setNotifications] = useState(true);
  const [siteName, setSiteName] = useState("My Admin Panel");
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>

      <div className="space-y-8">
        
        {/* 1. Profile / Account Settings */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">Profile / Account</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Customer Name"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Customer Email"
              className="w-full p-2 border rounded-lg"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-2 border rounded-lg"
            />
            <div>
              <label className="block mb-2">Profile Picture</label>
              <input type="file" />
            </div>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Enable Two-Factor Authentication (2FA)
            </label>
          </div>
        </section>

        {/* 2. App Preferences */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">App Preferences</h3>
          <div className="space-y-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
              />
              Dark Mode 🌙
            </label>
            <div>
              <label className="block mb-2">Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border rounded-lg p-2"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Time Zone</label>
              <select
                value={timeZone}
                onChange={(e) => setTimeZone(e.target.value)}
                className="border rounded-lg p-2"
              >
                <option value="UTC">UTC</option>
                <option value="EST">EST</option>
                <option value="PST">PST</option>
              </select>
            </div>
          </div>
        </section>

        {/* 3. Security & Roles */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">Security & Roles</h3>
          <div className="space-y-4">
            <div>
              <label className="block mb-2">Password Policy</label>
              <select className="border rounded-lg p-2">
                <option>Minimum 8 characters</option>
                <option>Minimum 12 characters + symbols</option>
              </select>
            </div>
          </div>
        </section>

        {/* 4. Notifications */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">Notifications</h3>
          <div className="space-y-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
              />
              Receive Email Notifications
            </label>
            <div>
              <label className="block mb-2">Frequency</label>
              <select className="border rounded-lg p-2">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>
        </section>

        {/* 5. System Settings */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-4">System Settings</h3>
          <div className="space-y-4">
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full p-2 border rounded-lg"
              placeholder="Site Name"
            />
            <div>
              <label className="block mb-2">Logo</label>
              <input type="file" />
            </div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={maintenanceMode}
                onChange={(e) => setMaintenanceMode(e.target.checked)}
              />
              Enable Maintenance Mode
            </label>
          </div>
        </section>

        {/* Save Button */}
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Save All Settings
        </button>
      </div>
    </div>
  );
}
