import React from 'react';
import './Input.css'

const Input = (props) => {

    const inputValidation = () => {
        document.addEventListener('keydown', (e) => {
            if(e.target.nodeName === 'INPUT'){  
                e.stopPropagation()
                const lastDigit = e.code[e.code.length - 1];
                const invalid = isNaN(lastDigit) && e.key.length === 1;
                if(invalid){
                    e.preventDefault();
                }
            }
		})
    }

    return (
        <input type="number" onKeyDown={inputValidation(this)} placeholder="0" id={props.id} name={props.name} step="any" onChange={props.inputChanged}/>
    );
    
}


export default Input;