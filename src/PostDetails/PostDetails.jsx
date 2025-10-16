import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post1 = useLoaderData();
    console.log(post1);
    return (
        <div>
            <p>hello</p>
            <h2>{post1.title}</h2>
            <p>{post1.body}</p>
        </div>
    );
};

export default PostDetails;