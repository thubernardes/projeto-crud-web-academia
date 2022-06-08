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
                        <span className="login-form-title">Bem Vindo!</span>
                        <span className="login-form-title">
                            <img src=''></img>
                        </span>

                        <div className="wrap-input">
                            <input className='input' type="email" />
                            <span className="focus-iput" data-placeholder='Email'>Email</span>
                        </div>

                        <div className="wrap-input">
                            <input className='input' type="password" />
                            <span className="focus-iput" data-placeholder='Password'>Password</span>
                        </div>

                        <div className="container-login-form-btn">
                            <a href='http://localhost:3000/employees'> LOGIN</a>

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