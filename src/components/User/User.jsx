import React from 'react';
import { useLoaderData } from 'react-router';
import Uses from '../uses/Uses';

const User = () => {
    const user=useLoaderData()
    // console.log(user);
    return (
        <div>
            <h2>User path is defined</h2>
            <div>
                {
                    user.map(usr=><Uses key={usr.id} uses={usr}></Uses>)
                }
            </div>
        </div>
    );
};

export default User;