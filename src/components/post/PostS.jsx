import React from 'react';
import { Link, useNavigate } from 'react-router';

const PostS = ({post}) => {
    const {id, title} = post;
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`/posts/${id}`)
    }
    return (
        <div style={{border: '2px solid red',
             borderRadius:"15px",
             marginBottom:"10px"

        }}>
            <h3>{title}</h3>

            <Link to={`/posts/${id}`}>
            <button>View Post</button>
            </Link>

            <button onClick={handleNavigate}>More info</button>
        </div>
    );
};

export default PostS;