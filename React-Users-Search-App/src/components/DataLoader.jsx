import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import UserCard from './UserCard';

const DataLoader = ({ searchText }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const res = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const result = await res.json();

      setData(result);
      setFilteredData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = data.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredData(filtered);
  }, [searchText, data]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 gap-4">
        <Circles height="80" width="80" color="green" />
        <p className="text-lg font-medium text-gray-600">Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center mt-20">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl shadow-md">
          <h3 className="font-bold">Error: {error}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">User List</h2>
      </div>

      {filteredData.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-10">
          No users found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DataLoader;