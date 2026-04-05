import React, { useRef } from 'react';

const UnControlledField = () => {

    // Email input field কে access করার জন্য ref তৈরি করা হয়েছে
    const emailRef = useRef(null);

    // Password input field কে access করার জন্য ref তৈরি করা হয়েছে
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        // Form submit হলে page reload বন্ধ করবে
        e.preventDefault();

        console.log('submitted');

        // Email input এর বর্তমান value নেওয়া হচ্ছে
        const email = emailRef.current.value;

        // Password input এর বর্তমান value নেওয়া হচ্ছে
        const password = passwordRef.current.value;

        // Console এ email এবং password দেখানো হচ্ছে
        console.log(email, password);
    };

    return (
        <div>
            {/* Form submit হলে handleSubmit function call হবে */}
            <form onSubmit={handleSubmit}>

                {/* Email input field */}
                <input
                    ref={emailRef}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <br />

                {/* Password input field */}
                <input
                    ref={passwordRef}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                />
                <br />

                {/* Submit button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UnControlledField;