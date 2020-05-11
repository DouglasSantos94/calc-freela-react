import React from 'react';
import '../Result/Result.css'

class Result extends React.Component {
    
    render(){
        const props = this.props;
        const inputValues = props.inputValues;
        const hourValue = inputValues.valorHora;
        const value = this.props.value
        return (
            <div className={(props && inputValues && hourValue && 'opened-result') || 'closed-result'}>
                {(props && inputValues && hourValue && `O valor da sua hora é: R$${hourValue.toFixed(2)}`) || (value && `O valor da sua hora é: R$${value.toFixed(2)}`)}
            </div>
        );
    }
}




export default Result;