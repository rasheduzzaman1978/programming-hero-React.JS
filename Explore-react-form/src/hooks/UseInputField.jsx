import { useState } from 'react';

const UseInputField = (defaultValue) => {
    const [feildValue, setFieldValue] = useState(defaultValue);

    const handleFieldOnChange = (e) => {
        const newValue = e.target.value;
        setFieldValue(newValue);
    };

    return [feildValue, handleFieldOnChange];
    
};

export default UseInputField;