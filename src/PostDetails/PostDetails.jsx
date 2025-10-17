import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post1 = useLoaderData();
    console.log(post1);
    const navigate=useNavigate();
    
    return (
        <div>
            <p>hello</p>
            <h2>{post1.title}</h2>
            <p>{post1.body}</p>
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetails;