import React from "react";
import logo from '../logo.svg';
import '../App.css'
const Body = () => {

    return (
        <div className="App">
            <div className="App-header">
                <p>
                    <h1>Todo App with ReactJS</h1>
                </p>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
    );
}

export default Body