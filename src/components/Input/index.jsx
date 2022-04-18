import React, {useState} from 'react';

function Input (props, ref) {
  const [value, setValue] = useState('');

  const changeValue = event => {
    setValue(event.target.value);
  }

  return <input ref={ref} value={value} onChange={changeValue}/>
};

export default React.forwardRef(Input);