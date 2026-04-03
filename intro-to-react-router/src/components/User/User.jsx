import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import UsersDetails2 from '../UsersDetails2/UsersDetails2';
import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';

const User = ({ user }) => {
    const [showInfo, setShowInfo] = useState(false);

    const [visitHome, setVisitHome] = useState(false);
    const location = useLocation();
    const { id, name, email, phone } = user;

    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching user details:', error);
            return null;
        });

        if(visitHome) {
            return <Navigate to="/"></Navigate>
        }

    return (
        <div className='border-amber-500 border-2 p-4 rounded-lg mb-4'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`} className='text-blue-500 hover:underline'>
                View Details
            </Link>
            <br />
            <button className='text-blue-500 hover:underline' onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? 'Hide' : 'Show'} Info
            </button>
            {showInfo && <Suspense fallback={<div>Loading...</div>}>
            <UsersDetails2 userPromise={userPromise} />
            </Suspense>}
                <br />
                <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;