import React, { useState } from "react";


// child (parameter has a state variable from the parent)
const Callback = ({ getColor }) => {
    const [activeColor, setActiveColor] = useState(null);

    const handleChange = (e) => {
        const { value } = e.target;
        setActiveColor(value);
        getColor(value);
    }

    return (
        <>
            <input 
                type="text"
                id="input"
                aria-label="input"
                onChange={handleChange}
                value={activeColor}
            />
        </>
    )
}

export default Callback;