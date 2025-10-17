import React, { Suspense, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router';
import UserDetails2 from '../userDetails2/UserDetails2';


const Uses = ({uses}) => {
    // console.log(uses);
    const userPromise=fetch(`https://jsonplaceholder.typicode.com/users/${uses.id}`).then(res=>res.json());
    const [isOpen, setIsOpen] = useState(false);
    const [visited,setVisited]=useState(false);
    const locationStyles=useLocation();
    console.log(locationStyles);
    const styles={
        border:"2px solid yellow",
        padding:"10px",
        margin:"10px",
        borderRadius:"15px",
        
    }
    if(visited){
        return <Navigate to='/'></Navigate>
    }
    return (
        <div style={styles}>
           <h2>{uses.name}</h2>
              <p>Email:{uses.email}</p>
                <p>Phone:{uses.phone}</p>
                <Link to={`/users/${uses.id}`}>Show details </Link>
                <button onClick={()=>setIsOpen(!isOpen)}>{isOpen?'Hide ':'Show ' }
                     info
                </button>
                {
                    isOpen && <Suspense fallback={<><p>Loading...</p></>}>
                        <UserDetails2 userPromise={userPromise} > </UserDetails2>
                    </Suspense>
                }

                <button onClick={()=>setVisited(true)}>Visit home</button>
        </div>
    );
};

export default Uses;