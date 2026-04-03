import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();

    const {userId} = useParams();
    console.log(userId);

    // const params = useParams();
    // console.log(params);

    const { id,name, email, phone, website } = user;

    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <h2 className='text-3xl font-bold mb-6 text-blue-700'>
                User Details
            </h2>

            <div className='border-2 border-gray-300 rounded-xl p-8 shadow-lg space-y-4 text-xl'>
                <p>
                    <span className='font-semibold'>ID:</span> {id}
                </p>
                <p>
                    <span className='font-semibold'>Name:</span> {name}
                </p>
                <p>
                    <span className='font-semibold'>Email:</span> {email}
                </p>
                <p>
                    <span className='font-semibold'>Phone:</span> {phone}
                </p>
                <p>
                    <span className='font-semibold'>Website:</span> {website}
                </p>
            </div>
        </div>
    );
};

export default UserDetails;