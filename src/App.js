import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const data = await res.json();
        console.log(data.results[0]);
        setData(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 transform transition-transform hover:scale-105">
        {data.map((user, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-6 bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-rotate-2 hover:scale-105 hover:shadow-lg cursor-pointer">
            {/* User Image */}
            <img
              src={user.picture.large}
              alt="User Profile"
              className="w-28 h-28 rounded-full border-4 border-blue-300 shadow-lg"
            />

            {/* User Details */}
            <div>
              <h2 className="text-2xl font-bold text-blue-800">
                {user.name.first} {user.name.last}
              </h2>
              <p className="text-blue-600 capitalize font-medium">{user.gender}</p>
              <p className="text-gray-500 text-sm">
                Phone: <a href={`tel:${user.phone}`} className="text-blue-500 hover:underline">{user.phone}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
