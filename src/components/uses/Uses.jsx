import React from 'react';
import { Link } from 'react-router';

const Uses = ({uses}) => {
    // console.log(uses);
    const styles={
        border:"2px solid yellow",
        padding:"10px",
        margin:"10px",
        borderRadius:"15px",
        
    }
    return (
        <div style={styles}>
           <h2>{uses.name}</h2>
              <p>Email:{uses.email}</p>
                <p>Phone:{uses.phone}</p>
                <Link to={`/users/${uses.id}`}>Show details </Link>
        </div>
    );
};

export default Uses;