import React from 'react';
import './CalculatorScreen.css'
import Form from '../../components/Form/Form'

class CalculatorScreen extends React.Component {

    render(){
        return (
            <section className="content">
                <Form />
            </section>
        );
    }
}

export default CalculatorScreen;
