import React, { use } from 'react';

const UsersDetails2 = ({userPromise}) => {
    const {name, username} = use(userPromise);

    return (
        <div>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
        </div>
    );
};

export default UsersDetails2;