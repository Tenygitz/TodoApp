import React from 'react';

function Completed(props) {
  return (
    <input className="input" value={props.obj.text} />
  )
}

export default Completed