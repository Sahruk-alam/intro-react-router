import React, { use } from 'react';

const User2 = ({usersPromise}) => {
    const users22=use(usersPromise)
    console.log("users2",users22);
    return (
        <div>
            <h2>users 2 component </h2>
        </div>
    );
};

export default User2;