// UserCard.jsx
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-600">
          {user.name.charAt(0)}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {user.name}
          </h3>
          <p className="text-sm text-gray-500">{user.username}</p>
        </div>
      </div>

      <div className="space-y-2 text-gray-600">
        <p>
          <span className="font-semibold">📧 Email:</span> {user.email}
        </p>
        <p>
          <span className="font-semibold">📞 Phone:</span> {user.phone}
        </p>
        <p>
          <span className="font-semibold">🌐 Website:</span> {user.website}
        </p>
        <p>
          <span className="font-semibold">🏢 Company:</span> {user.company.name}
        </p>
      </div>
    </div>
  );
};

export default UserCard;