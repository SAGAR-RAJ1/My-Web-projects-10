import React from 'react'
import './Button.css'
function Button(props) {
  return (
    <div>
    <button>
    <img src={props.icon} />  {props.text}
    </button>
    </div>
  )
}

export default Button
