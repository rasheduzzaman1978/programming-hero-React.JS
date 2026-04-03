import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();

    const navigate = useNavigate();

     
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
            <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
                <div className="mb-6">
                    <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">
                        Post Details
                    </span>
                </div>

                <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                    {post.title}
                </h2>

                <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-600 text-lg leading-8">
                        {post.body}
                    </p>
                    <button onClick={() => navigate(-1)} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-gray-300 rounded">
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;