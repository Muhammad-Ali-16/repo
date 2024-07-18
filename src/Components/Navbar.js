import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: props.NavBg}}>
                <div className="container">
                    <Link className="navbar-brand nav-link active" style={{color:props.color}} to="/">Text Transformer</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" style={{color:props.color}} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{color:props.color}} to="/ReactNestedStates">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{color:props.color}} to="/ReactProps">Props</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="form-check form-switch" style={{color:props.color}}>
                        <input className="form-check-input" type="checkbox" role="switch" onClick={props.BtnClickHandle}/>
                        <label className="form-check-label">{props.ModeTxt} Dark Mode</label>
                    </div>

                </div >
            </nav >

        </>
    );
}