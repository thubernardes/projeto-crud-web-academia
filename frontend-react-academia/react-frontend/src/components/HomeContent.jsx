import React, { Component } from 'react';
import '../styles.css'
import ListEmployeeComponent from './ListEmployeeComponent';

class HomeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className='container'>
                <div className="container-login">
                    <div className="wrap-login">
                        <form className="login-form"></form>
                        <span className="login-form-title">Bem vindo!</span>
                        <span className="login-form-title">
                        <h1 className="g7-logo">G<strong className="g7-strong">7</strong></h1>
                        </span>

                        <div className="wrap-input">
                            <span className="focus-iput" data-placeholder='Email'>Email</span>
                            <input className='input' type="email" /> 
                        </div>

                        <div className="wrap-input">
                            <span className="focus-iput" data-placeholder='Password'>Senha</span>
                            <input className='input' type="password" />
                            
                        </div>

                        <div className="container-login-form-btn">
                            <a className='login-form-btn' href='http://localhost:3000/employees'> LOGIN</a>

                            <div className="text-center">
                                <span className="txt1">Esqueceu sua senha?</span>

                                <a className='txt2' href="#">Recupere.</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default HomeComponent;