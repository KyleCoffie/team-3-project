import { useState, useEffect } from "react";

type User = {
  id: number;
  firebaseUid: string;
  firstName: string;
  lastName: string | null;
  email: string;
  phone: string | null;
  photoUrl: string | null;
  role: "GUEST" | "HOST" | "ADMIN";
  createdAt: string;
  updatedAt: string;
  verifiedDriver: boolean;
  rating: number;
  tripsCompleted: number;
  stripeAccountId: string | null;
  isActive: boolean;
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Using Firebase JWT token for authentication
        const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImUzZWU3ZTAyOGUzODg1YTM0NWNlMDcwNTVmODQ2ODYyMjU1YTcwNDYiLCJ0eXAiOiJKV1QifQ.eyJyb2xlIjoiQURNSU4iLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcmFvLXJlbnRhbHMiLCJhdWQiOiJyYW8tcmVudGFscyIsImF1dGhfdGltZSI6MTc1NzQ1MjI0OCwidXNlcl9pZCI6Ik54Z2VnSlo0ZGRVQkVtVXp1dW5wUDNEVFZ3azIiLCJzdWIiOiJOeGdlZ0paNGRkVUJFbVV6dXVucFAzRFRWd2syIiwiaWF0IjoxNzU3NDUyMjQ4LCJleHAiOjE3NTc0NTU4NDgsImVtYWlsIjoiY2FtZXJvbi1zdGFubGV5QGV4YW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNhbWVyb24tc3RhbmxleUBleGFtcGxlLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.YCzv6NDrcEyJVMkQ-Vb2XUl7e5F5mfYUwa9AKUX-Cw3k3B_Sn4SrUIYJ1QSF4HEP8yplXnmOLvMlOxX5eADbY9GdxBp3G5Nq6BNF0UI9BUnVxw0c-kZBgmg9zfYW05hBrmxLJ1Jl5XHz7cjZIlRRi_IcGT8l5UDgD5CbZesGojIEUfLa2vdOi7_z7aYMuNH-rZmXTTJib54sbiu8utvd7J9MwfPfUuK75NJgiggnrpmh4td0GOwnxdJy4RlE5PvxDd5uECALbIC-87EvkzH_kkNb-_5rv3fN_47g5FFTGFDUs9Dzu_QfrsLkxWoCj8E7iovaBvodiBBVkYa7E58aNg';
        
        const response = await fetch('http://localhost:3333/admin/users', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch users: ${response.status}`);
        }

        const userData = await response.json();
        setUsers(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch users');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Helper function to format user name
  const formatUserName = (user: User) => {
    const firstName = user.firstName || '';
    const lastName = user.lastName || '';
    return `${firstName} ${lastName}`.trim() || 'Unknown User';
  };

  // Helper function to format role for display
  const formatRole = (role: User['role']) => {
    switch (role) {
      case 'ADMIN':
        return 'Admin';
      case 'HOST':
        return 'Host';
      case 'GUEST':
        return 'Guest';
      default:
        return role;
    }
  };

  if (loading) {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">User Management</h2>
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-500">Loading users...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-4">User Management</h2>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>Error:</strong> {error}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>

      <table className="w-full bg-white rounded-xl shadow overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
            <th className="p-3">Rating</th>
            <th className="p-3">Trips</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={7} className="p-8 text-center text-gray-500">
                No users found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">
                  <div>
                    <div className="font-medium">{formatUserName(user)}</div>
                    {user.phone && (
                      <div className="text-sm text-gray-500">{user.phone}</div>
                    )}
                  </div>
                </td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.role === 'ADMIN' 
                      ? 'bg-red-100 text-red-800'
                      : user.role === 'HOST'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {formatRole(user.role)}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <span className={`w-2 h-2 rounded-full ${
                      user.isActive ? 'bg-green-400' : 'bg-red-400'
                    }`}></span>
                    <span className="text-sm">
                      {user.isActive ? 'Active' : 'Inactive'}
                    </span>
                    {user.verifiedDriver && (
                      <span className="text-xs bg-green-100 text-green-800 px-1 py-0.5 rounded">
                        Verified Driver
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-3">
                  <div className="text-sm">
                    {user.rating > 0 ? `${user.rating}/5` : 'No rating'}
                  </div>
                </td>
                <td className="p-3">
                  <div className="text-sm">
                    {user.tripsCompleted} completed
                  </div>
                </td>
                <td className="p-3 space-x-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
                    Edit
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
