import React from 'react';
import { useLoaderData } from 'react-router';
import PostS from '../post/PostS';

const Post = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>Here, All posts showing : {posts.length}</h2>
            <div>
                {
                    posts.map(post => <PostS key={post.id} post={post}></PostS>)
                }
            </div>
        </div>
    );
};

export default Post;