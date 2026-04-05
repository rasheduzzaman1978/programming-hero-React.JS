import React, { useState } from 'react';

const ControlledField = () => {

    // Name input এর value store করার জন্য state
    const [name, setName] = useState('');

    // Email input এর value store করার জন্য state
    const [email, setEmail] = useState('');

    // Password input এর value store করার জন্য state
    const [password, setPassword] = useState('');

    // Error message store করার জন্য state
    const [error, setError] = useState('');

    const handleSubmit = (e) => {

        // Form submit হলে page reload বন্ধ করবে
        e.preventDefault();

        // Password 6 অক্ষরের কম হলে error দেখাবে
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        // Password valid হলে error remove করবে
        setError('');

        console.log('submitted');

        // Name, Email এবং Password console এ দেখাবে
        console.log({ name, email, password });
    };

    const handleNameOnChange = (e) => {

        // Input field এর নতুন value নেওয়া হচ্ছে
        const newName = e.target.value;

        // Name state update করা হচ্ছে
        setName(newName);
    };

    const handleEmailOnChange = (e) => {

        // Input field এর নতুন value নেওয়া হচ্ছে
        const newEmail = e.target.value;

        // Email state update করা হচ্ছে
        setEmail(newEmail);
    };

    const handlePasswordOnChange = (e) => {

        // Input field এর নতুন value নেওয়া হচ্ছে
        const newPassword = e.target.value;

        // Password state update করা হচ্ছে
        setPassword(newPassword);

        // Password 6 অক্ষরের কম হলে error message দেখাবে
        if (newPassword.length < 6) {
            setError('Password must be at least 6 characters long');
        } else {
            // Password valid হলে error remove করবে
            setError('');
        }
    };

    return (
        <div>
            {/* Form submit হলে handleSubmit function call হবে */}
            <form onSubmit={handleSubmit}>

                {/* Name input field */}
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleNameOnChange}
                    required
                />
                <br />

                {/* Email input field */}
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailOnChange}
                    required
                />
                <br />

                {/* Password input field */}
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordOnChange}
                    required
                />
                <br />

                {/* Submit button */}
                <input type="submit" value="Submit" />
            </form>

            {/* Error message দেখানোর জন্য */}
            <p className="text-red-600">
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;