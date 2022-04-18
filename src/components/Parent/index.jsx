import React, {useRef, useEffect, useState} from 'react';
import Element from '../Element';
import Input from '../Input';

function Parent() {
    const count = useRef(0);
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const elementRef = useRef(null);
    const buttonRef = useRef(null);

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

    const getElement = element => {
        console.log(element);
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
            <Input ref={elementRef} changeValue={changeValue}/>

            <h1>Example 4</h1>
            <p>Get element using callbakc ref</p>
            <button ref={buttonRef} onClick={getElement}>get element</button>
            <Element />
        </>
    );
}

export default Parent;