import React from "react";
import { Link } from 'react-router-dom';

function Header() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="hb" style={{ color: "red" }}>Navbar</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>  

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item active">
                        <Link to="/home" className="nav-link">Home</Link> {/* Not refresh this page  */}
                    </li>

                    <li className="nav-item">
                        {/* <a className="nav-link" href="/add">Create Student</a> */}
                        <Link to="/add" className="nav-link">Create Student</Link>
                    </li>

                    <li className="nav-item active">
                        <Link to="/all" className="nav-link">Student Details</Link> {/* Not refresh this page  */}
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Header;