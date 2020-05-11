import React from 'react';
import './Form.css';
import CardForm from './CardForm/CardForm';
import Button from './Button/Button';
import Result from '../Result/Result';

class Form extends React.Component {
    
    state = {
        valorHora: 0,
        dailyTime: 0,
        daysWorking: 0,
        daysVacation: 0,
        projectValue: 0
    }

    infos = {
        dailyTime: {
            id: "daily-time",
            label: "Tempo diário investido no projeto",
            description: "Tempo demandado das horas em off que você possui.  As horas em off seriam depois do trabalho, escola ou aquele tempinho vago no final do dia que você usa pra relaxar e descontrair.",
        },
        daysWorking: {
            id: "days-working",
            label: "Dias de férias por projeto",
            description: "Nem sempre você poderá se dedicar a um projeto em todos os dias da sua semana. Por isso, é importante saber a quantidade correta de dias trabalhados no projeto para realizar o cálculo.",
        },
        daysVacation: {
            id: "days-vacation",
            label: "Dias de férias por projeto",
            description: "Assim como em qualquer modalidade de trabalho, nos freelas é necessário calcular os encargos referentes às férias. Use como base o número de dias de férias no período do projeto.",
        },
        projectValue: {
            id: "project-value",
            label: "Valor total a receber pelo projeto",
            description: "Essa é a principal variável para calcular o valor da sua hora em um projeto. Com base no valor total que você pretende receber pelo projeto, serão feitos todos os outros cálculos.",
        }
    }

    changeValueHandler = () => {

        document.addEventListener('change', e => {
            const input = e.target;
            const id = input.id;
            const value = input.value;
            id === 'daily-time' && this.setState({ dailyTime: value });
            id === 'days-working' && this.setState({ daysWorking: value });
            id === 'days-vacation' && this.setState({ daysVacation: value });
            id === 'project-value' && this.setState({ projectValue: value });
        })

    }

    calcValueHandler = () => {

        document.addEventListener('submit', e => {
            e.target.nodeName === 'FORM' && e.preventDefault();
        })

        const valorHora = ( this.state.projectValue / (this.state.daysWorking * 4 * this.state.dailyTime )) + ( this.state.daysVacation * this.state.daysWorking * this.state.dailyTime );

        this.setState({ valorHora });
        
        this.value = valorHora;

    }

    value = 0

    resetHandler = () => {
        this.setState({
            valorHora: '',
            dailyTime: 0,
            daysWorking: 0,
            daysVacation: 0,
            projectValue: 0
        })
    }


    render(){
        const style = {
            display: 'flex',
            flexDirection: 'column',
        }

        return (
            <div style={style}>   
                <form className="form" onSubmit={this.calcValueHandler} onReset={this.resetHandler}>
                    <legend>O que levar em consideração</legend>
                    <div className="cards">
                    <CardForm id={this.infos.dailyTime.id} label={this.infos.dailyTime.label} inputChanged={this.changeValueHandler}>{this.infos.dailyTime.description}</CardForm>

                    <CardForm id={this.infos.daysWorking.id} label={this.infos.daysWorking.label} inputChanged={this.changeValueHandler}>{this.infos.daysWorking.description}</CardForm>

                    <CardForm id={this.infos.daysVacation.id} label={this.infos.daysVacation.label} inputChanged={this.changeValueHandler}>{this.infos.daysVacation.description}</CardForm>

                    <CardForm id={this.infos.projectValue.id} label={this.infos.projectValue.label} inputChanged={this.changeValueHandler}>{this.infos.projectValue.description}</CardForm>
                    </div>
                    <div className="buttons">
                        <Button type="reset">Limpar</Button>
                        <Button type="submit">Calcular</Button>
                    </div>
                </form>
                <Result inputValues={this.state} value={this.value} />
            </div>
        );

    }
}

export default Form;