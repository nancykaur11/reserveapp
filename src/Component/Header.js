import React from 'react';
import './Header.css';
import logo from "./icon/logo.png"

export function Header() {
    return (
        <div className="header container-fluid">
            <div className="row">
            <div className="col-md-2 bg-black d-flex align-items-center">
                    <img src={logo} alt="Logo" className="logo" style={{ maxWidth: '34%', height: 'auto' }} />
                </div>
                <div className=" head col-md-1.5 text-right">
                    <span>About Us</span>
                </div>
                <div className=" head col-md-1">
                    <span>Ticket</span>
                </div>
                <div className=" head col text-right">
                    <div className="btn-link-container">
                        <span>  <a href="/login">Login</a></span>
                        <span style={{marginLeft:"10px"}}><a href="/login">Register</a></span>
                    </div>
                </div>
                {/* <div className="col text-right">
    <div className="btn-link-container">
        <a href="/login">Login</a>
    </div>
    <div className="btn-link-container">
        <a href="/register" style={{ marginLeft: "10px" }}>Register</a>
    </div>
</div> */}
            </div>
        </div>
    );
}
