import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
 class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm bg-primary navbar-dark">

                <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to={'/normal-form'}>Normal Form</Link>
                </li>
                <li class="nav-item">
                    <Link to={'/signup-form'}>SigUp Form</Link>
                </li>
                </ul>

                </nav>
            </div>
        )
    }
}
export default Header;