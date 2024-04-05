//import React from "react";

import { Link } from "react-router-dom";

const Disciplinas = () => {
    return (
        <div className="Area-btns-disciplina">
            <Link to='/SistemasMultimidia'>
                <button className="btn-Sistemas-Multimidia">
                    <h1>Sistemas Multimídia</h1>
                </button>
            </Link>

            <button className="btn-Disciplina-em-Operacao">
                <h1>Disciplina 2</h1>
            </button>
        </div>
    );
}

export default Disciplinas;