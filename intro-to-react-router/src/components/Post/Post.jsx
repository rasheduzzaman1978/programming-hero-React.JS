import React from 'react';
import { Link, useNavigate } from 'react-router-dom'


const Post = ({ post }) => {
    const {id, title, body } = post;

    const navigate = useNavigate();
      
    const handleNavigate = () => {
        navigate(`/posts/${id}`);
    };

    return (
        <div className='border-2 border-gray-300 rounded-lg p-4 m-4 shadow-md'>
            <h3>Post ID: {id}</h3>
            <h2>Title: {title}</h2>
            <p>Body: {body}</p>
            <Link to={`/posts/${id}`} className='text-blue-500 hover:text-blue-700'>
                Show Details
            </Link>
            <br />
            <button onClick={handleNavigate}>Details of: {id}</button>
        </div>
    );
};

export default Post;