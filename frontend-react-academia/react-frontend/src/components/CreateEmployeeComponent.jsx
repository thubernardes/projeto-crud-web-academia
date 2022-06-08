import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName:'',
            lastName:'',
            emailId:''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind (this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind (this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this)
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees'); 
        });
    }

    changeFirstNameHandler(event){
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler(event){
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler(event){
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='card col-md-6 offset-md-3 offset-md-3'>
                                <h3 className='text-center'>Cadastro do cliente</h3>
                                <div className='card-body'>
                                    <form>
                                        <div className='form-group'>
                                            <label>Nome</label>
                                            <input placeholder='Nome' name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                                            <br></br>
                                        </div>
                                        <div className='form-group'>
                                            <label>Sobrenome</label>
                                            <input placeholder='Sobrenome' name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
                                            <br></br>
                                        </div>
                                        <div className='form-group'>
                                            <label> Email </label>
                                            <input placeholder='Email' name='emailId' className='form-control' value={this.state.emailId} onChange={this.changeEmailHandler}></input>
                                            <br></br>
                                        </div>
                                        <br></br>
                                        <button className='btn btn-success' onClick={this.saveEmployee}>Salvar</button>
                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: '10px'}}>Cancelar</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;