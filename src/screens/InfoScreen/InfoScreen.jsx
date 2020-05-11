import React from 'react';
import './InfoScreen.css'

class InfoScreen extends React.Component {
    render(){
        return (
            <header className="main-header">
                <div className="title">
                    <h1>Calculadora de Freelas</h1>
                    <h2>Calcule qual é o valor da sua hora em um freelance</h2>
                </div>
            </header>
        );
    }
}

export default InfoScreen;
