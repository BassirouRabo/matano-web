import React, {Component} from "react";
import {logout} from "../helpers/auth";

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">Matano ?</Link>
                    </div>
                    <ul className="nav navbar-nav pull-right">
                        <li>
                            <Link to="/" className="navbar-brand">Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
                        </li>
                        <li>
                            <button style={{border: 'none', background: 'transparent'}} onClick={() => {
                                logout()
                            }} className="navbar-brand">Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;