import React from 'react';
import { Link } from 'react-router';

const PostS = ({post}) => {
    const {id, title} = post;
    return (
        <div style={{border: '2px solid red',
             borderRadius:"15px"

        }}>
            <h3>{title}</h3>

            <Link to={`/posts/${id}`}>
            <button>View Post</button>
            </Link>
        </div>
    );
};

export default PostS;