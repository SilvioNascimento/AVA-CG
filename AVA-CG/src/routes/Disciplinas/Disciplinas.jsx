//import React from "react";

import { Link } from "react-router-dom";
import './Disciplinas.css';

const Disciplinas = () => {
    return (
        <div className="Area-btns-disciplinas">
                
            <b>DISCIPLINAS</b>
            <div className="btns-disciplinas">

                <Link to='/SistemasMultimidia'>
                    <button className="btn-Sistemas-Multimidia">
                        <h1>Sistemas Multimídia</h1>
                    </button>
                </Link>

                <button className="btn-Matemática">
                    <h1>Matemática</h1>
                </button>

                <button className="btn-Português">
                    <h1>Português</h1>
                </button>

                <button className="btn-Física">
                    <h1>Física</h1>
                </button>

                <button className="btn-Física">
                    <h1>Física</h1>
                </button>

                <button className="btn-Física">
                    <h1>Física</h1>
                </button>
            </div>
            
        </div>
    );
}

export default Disciplinas;