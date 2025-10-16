import React from 'react';

const Uses = ({uses}) => {
    console.log(uses);
    const styles={
        border:"2px solid yellow",
        padding:"10px",
        margin:"10px",
        borderRadius:"15px",
        backgroundColor:"gray"
    }
    return (
        <div style={styles}>
           <h2>{uses.name}</h2>
              <p>Email:{uses.email}</p>
                <p>Phone:{uses.phone}</p>
        </div>
    );
};

export default Uses;