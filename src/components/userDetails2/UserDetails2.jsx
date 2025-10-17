import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const {name,username}=use(userPromise);
    return (
        <div>
            <p><small>User Name : {username}</small></p>
            <h4>Name: {name}</h4>
        </div>
    );
};

export default UserDetails2;