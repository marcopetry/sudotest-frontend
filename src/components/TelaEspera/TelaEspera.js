import React from 'react';
import './TelaEspera.css';
import Loader from 'react-loader-spinner'
import logo from '../../assets/logo.png';

export default function TelaEspera({ history }) {

    return (
        <div className="tela-espera-container">
            <div className="img-form">
                <img src={logo} alt="Sudotec Logo" />
                <Loader
                    type="TailSpin"
                    color="#DF4723"
                    height={100}
                    width={100}
                />
            </div>
        </div>
    );
}