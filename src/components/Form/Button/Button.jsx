import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button type={props.type} className="button-calc" onClick={props.onclick}>{props.children}</button>
    );
}

export default Button;