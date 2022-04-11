import React, {useRef} from 'react';

function Parent() {
    const inputRef = useRef(null);

    const focus = () => {
        inputRef.current.focus();
    }

    return (
        <>
            <h1>Example 1</h1>
            <p>Click submit button to focus on input</p>
            <input type="text" ref={inputRef} /> 
            <button onClick={focus}>submit</button>

        </>
        
    );
}

export default Parent;