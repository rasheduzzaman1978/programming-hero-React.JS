import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) => {

        // Form submit হলে page reload বন্ধ করবে
        e.preventDefault();

        // Name input field এর value console এ দেখাবে
        console.log(e.target.name.value);

        // Email input field এর value console এ দেখাবে
        console.log(e.target.email.value);
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
                />
                <br />

                {/* Email input field */}
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <br />

                {/* Submit button */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;