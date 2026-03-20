import React, { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner';
import { CirclesWithBar } from 'react-loader-spinner';
import { Circles } from 'react-loader-spinner';

const DataLoader = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 🔄 Loading state
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        {/* <Audio height="80" width="80" color="green" /> */}
        {/* <CirclesWithBar height="80" width="80" color="green" /> */}
        <Circles height="80" width="80" color="green" />
        

        <p>Loading data...</p>
      </div>
    );
  }

  // ❌ Error state
  if (error) {
    return (
      <div style={{ textAlign: 'center', color: 'red' }}>
        <h3>Error: {error}</h3>
      </div>
    );
  }

  // ✅ Data show
  return (
    <div>
      <h2>User List</h2>
      {
        data.map(user => (
          <div key={user.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        ))
      }
    </div>
  );
};

export default DataLoader;