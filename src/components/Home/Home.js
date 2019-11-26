import React from 'react';
import './Home.css';
import logo from '../../assets/logo.png';

export default function Home(){

    return(
        <div className="dashboard-container">
            <img src={logo} alt="Sudotec Logo" />
            <div className="text-container">
                <h1 id="sudo">Sudo </h1>
                <h1 id="test">Test</h1>
            </div>
        </div>
    );
}