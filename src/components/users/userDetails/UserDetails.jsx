import React from 'react';
import { Navigate, useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {
    const user1=useLoaderData();
    const userId=useParams()
    console.log(userId);
    const {name,website, company,phone}=user1;
   const navigate=useNavigate();
    // const navigate=useParams();
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
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default UserDetails;