import React, {useRef} from 'react';
import Child from './../Child';

function Container() {
    const inputRef = useRef(null);

    const focus = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputRef} /> 
            <button onClick={focus}>submit</button>
        </>
        
    );
}

export default Container;