import React, { useState } from "react";
import "./styles.css";
import Callback from './callback';

// parent
const Colors = () => {
    const [UIColor, setUIColor]  = useState(null);

    // callback function
    const getColor = (color) => {
        setUIColor(color);
    };

    return (
        <div className="colors">
            <div
                className="color_container"
                style={{ background: `${UIColor}`}}
            ></div>
            <Callback getColor={getColor} />
        </div>
    )
}

export default Colors;