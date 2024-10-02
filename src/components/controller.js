import React, { useState } from 'react';
import RandomQuoteGenerator from './RandomQuote/index';
import Calculator from './Calculator/index';

const Controller = () => {
    const [showComp1, setShowComp1] = useState(true);
    const [showComp2, setShowComp2] = useState(true);


    return (
        <div>
            <button
                onClick={() => setShowComp1(prev => !prev)}>Random Quote Generator</button>
            <button
                onClick={() => setShowComp2(prev => !prev)}>Calculator</button>

            {showComp1 && <RandomQuoteGenerator />}
            {showComp2 && <Calculator />}
        </div>
    );
}

export default Controller;