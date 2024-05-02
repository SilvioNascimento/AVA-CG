import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Maintenance.css';

function Maintenance() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 1);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return(
        <div className="Area-Maintencance">
            <div className="app">
                <div className="gear" style={{ transform: `rotate(${rotation}deg)` }}></div>
                <p className="text">O CONTEÚDO SERÁ ADICIONADO EM BREVE</p>

            </div>
            
            <Link to='/Disciplinas'>
                <button className="btn-voltar-disciplinas">
                    Voltar
                </button>
            </Link>
        </div>
        
    );

}

export default Maintenance;