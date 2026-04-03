import React, {use} from 'react';

const Users2 = ({ usersPromise }) => {
    const users = use(usersPromise);
    console.log("users2:", users);

    return (
        <div>
            <h2>This is users2</h2>
            <h4>List of Users</h4>
            <ul className='border-amber-400'>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users2;