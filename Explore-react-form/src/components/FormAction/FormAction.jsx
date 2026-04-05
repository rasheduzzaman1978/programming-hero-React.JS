import React from 'react';

const FormAction = () => {

    // Form submit হলে এই function call হবে
    // formData এর মাধ্যমে input field এর value পাওয়া যায়
    const handleFormAction = (formData) => {

        // name input field এর value নেওয়া হচ্ছে
        console.log(formData.get('name'));

        // email input field এর value নেওয়া হচ্ছে
        console.log(formData.get('email'));
    };

    return (
        <div>
            {/* Component title */}
            <h2>Form Action Component</h2>

            {/* Form submit হলে handleFormAction function call হবে */}
            <form action={handleFormAction}>

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
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;