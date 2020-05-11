import React from 'react';
import './CardForm.css';
import Input from './Input/Input';

const CardForm = (props) => {
    
    return (
        <div className="card-form">
            <label htmlFor={props.id}>{props.label}</label>
            <div className="label-description">
                <p>{props.children}</p>
            </div>
            <Input id={props.id} name={props.id} inputChanged={props.inputChanged}/>
        </div>
    );
}

export default CardForm;