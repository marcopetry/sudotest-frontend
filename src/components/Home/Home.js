import React from 'react';
import './Home.css';
import logo from '../../assets/logo1.png';


export default function Home(){

    return(
        <div className="dashboard-container">
            <img src={logo} alt="Sudotec Logo" />
        </div>
    );
}