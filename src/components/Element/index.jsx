import React from 'react'

function Element(props, ref) {
  const {callbackRef} = props;

  return (
    <div ref={callbackRef}>Element</div>
  )
}

export default React.forwardRef(Element)