import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href='http://localhost:3000/home' className='navbar-brand'>G7 GYM</a></div>                    
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;