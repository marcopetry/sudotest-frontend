import React, { useState, useEffect } from 'react';
import './TelaEspera.css';
import Loader from 'react-loader-spinner'
import logo from '../../assets/logo1.png';

export default function TelaEspera({ history }) {
    
    return (
        <div className="tela-espera-container">
            <div className="img-form">
                <div className="loader">
                    <img src={logo} alt="Sudotec Logo" />
                </div>
                <div className="loader">
                    <Loader
                        type="TailSpin"
                        color="#DF4723"
                        height={100}
                        width={100}
                    />
                </div>
                <div className="loader div-texto-carregar">
                    <label>Estamos carregando suas informações . . .</label>
                </div>
            </div>
        </div>
    );
}