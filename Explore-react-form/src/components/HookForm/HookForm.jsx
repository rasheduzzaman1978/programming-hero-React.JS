import React from 'react';
import UseInputField from '../../hooks/UseInputField';

const HookForm = () => {

    const [name, nameOnChange] = UseInputField('');
    const [email, emailOnChange] = UseInputField('');
    const [password, passwordOnChange] = UseInputField('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted', name, email, password);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange} placeholder="Name" />
                <br />
                <input defaultValue={email} type="email" onChange={emailOnChange} placeholder="Email" />
                <br />
                <input defaultValue={password} type="password" onChange={passwordOnChange} placeholder="Password" />
                <br />
                <input type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default HookForm;