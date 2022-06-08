import React, { Component } from 'react';
import { generatePath } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }

    editEmployee(id){
        this.props.history.push(generatePath(`/update-employee/${id}`));
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });     
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    } 
    
    render() {
        return (
            <div>
                <h2 className='text-center'>Lista de clientes</h2>
                <div className='row'>
                    <td>
                    <button type="button" className='btn btn-primary btn-lg' onClick={this.addEmployee}>Cadastrar cliente</button>
                    </td>
                </div>
                 <div className='row'>
                        <table className='table table-striped table-bordered'> 

                            <thead> 
                                <tr>
                                    <th> Nome</th>
                                    <th> Sobrenome</th>
                                    <th> Email</th>
                                    <th> Ações </th>
                                </tr>

                            </thead>

                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key={employee.id}>
                                            <td> {employee.firstName}</td>
                                            <td> {employee.lastName}</td>
                                            <td> {employee.emailId}</td>
                                            <td class="buttons-container"> 
                                                 <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Atualizar</button> 
                                                 <button style={{marginLeft: "10px"}} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Excluir</button> 
                                                 <button style={{marginLeft: "10px"}} onClick={() => this.viewEmployee(employee.id)} className="btn btn-light">Visualizar</button> 
                                            </td>

                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                 </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;