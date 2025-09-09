import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
};

export default function UsersPage() {
  // Sample user data
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "Viewer" },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t hover:bg-gray-50 transition"
            >
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3 space-x-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
                  Edit
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
