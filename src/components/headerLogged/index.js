import React, {useState} from "react";

const HeaderLogged = () => {
    const [dropdown_shown, setDropDown] = useState(false)
    return (

        <nav  className="navbar fixed-top  navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Study Tracker
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a onClick={() => setDropDown(prev => !prev)} id="navbarDropdown"
                               className="nav-link dropdown-toggle" href="#" role="button">
                                Samarth
                            </a>

                            <div className={`dropdown-menu ${dropdown_shown ? 'show' : ''} dropdown-menu-right`}>
                                <a className="dropdown-item"
                                   href="/junior/level/">
                                    Start Studying
                                </a>
                                <a className="dropdown-item" href="/problem/list">
                                    Add Notes
                                </a>
                                <a className="dropdown-item" href="/problem/create">
                                    Add Problem
                                </a>
                                <a className="dropdown-item" href="/problem/create">
                                    Add Solution
                                </a>
                                <a className="dropdown-item" href="/calender">
                                    Calender
                                </a>
                                <a className="dropdown-item" href="/user/edit">
                                    Edit Account
                                </a>
                                <a className="dropdown-item">
                                    Logout
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default HeaderLogged