import React, {useRef, useEffect, useState} from 'react';

function Parent() {
    const componentRef = useRef(null);
    const count = useRef(0);
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        count.current += 1;
    });
    

    const focus = () => {
        inputRef.current.focus();
    };

    const changeValue = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <h1>Example 1</h1>
            <p>Click submit button to focus on input</p>
            <input type="text" ref={inputRef} value={inputValue} onChange={changeValue}/> 
            <button onClick={focus}>submit</button>

            <h1>Example 2</h1>
            <p>Display amount of renders while typing in input field</p>
            <span>Render count: {count.current}</span>
        </>
        
    );
}

export default Parent;