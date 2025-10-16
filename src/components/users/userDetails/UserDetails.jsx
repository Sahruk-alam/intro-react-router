import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user1=useLoaderData();
    console.log(user1);
    const {name,website, company,phone}=user1;

     const stylesCss={
            border:"2px solid tomato",
            padding:"10px",
            margin:"10px",
            borderRadius:"15px",
        }
    return (
       
        <div style={stylesCss}>
            <h3 style={{color:"tomato"}}>User details</h3>
            <p>Name: {name}</p>
            <p>Website: {website}</p>
            <p>Company: {company.name}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default UserDetails;