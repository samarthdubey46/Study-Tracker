import React from "react";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm" style={{position:'relative'}}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    Study Tracker
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="">Login</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header