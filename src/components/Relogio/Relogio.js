import React, { useState, useEffect } from 'react';
import './Relogio.css';
import { horarioRestanteProva } from '../../helpers/Relogio';
import Timer from 'react-compound-timer';

export default function Relogio(props) {
    const tempoProva = horarioRestanteProva(props.horaTermino);

    return (
        <Timer initialTime={tempoProva}
            formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}
            direction="backward"
            checkpoints={[
                {
                    time: 0,
                    callback: props.terminouTempoProva,
                },
            ]}>
            <div className="container-relogio">
                <strong><Timer.Hours /></strong>
                <label>:</label>
                <strong><Timer.Minutes /></strong>
                <label>:</label>
                <strong><Timer.Seconds /></strong>
            </div>
        </Timer>
    );
}