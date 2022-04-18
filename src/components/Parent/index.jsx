import React, {useRef, useEffect, useState} from 'react';
import Child from './../Child';

function Parent() {
    const count = useRef(0);
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const elementRef = useRef(null);

    useEffect(() => {
        count.current += 1;
        elementRef.current.focus();
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
            <p>Click focus button to focus on input</p>
            <input placeholder="Type to count renders" type="text" ref={inputRef} value={inputValue} onChange={changeValue}/> 
            <button onClick={focus}>focus</button>

            <h1>Example 2</h1>
            <p>Display amount of renders while typing in input field</p>
            <span>Render count: {count.current}</span>

            <h1>Example 3</h1>
            <p>Getting child component input focused after each render</p>
            <Child ref={elementRef} changeValue={changeValue}/>
        </>
    );
}

export default Parent;