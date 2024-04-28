import { useState } from "react";
import PDFViewer from "../PDFViewer/PDFViewer";
import { Link } from "react-router-dom";


const SistemasMultimidia = () => {

    const [selectedButton, setSelectedButton] = useState(null);
    

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName === selectedButton ? null : buttonName);
    };


    const renderOptions = (buttonName) => {
        if(selectedButton === buttonName) {
            return (
                <div className="Opcoes">
                    <button>Assunto em Blog</button>
                    <Link to='/PDFViewer'>
                        <button>Leitor PDF</button>
                    </Link>
                    
                    

                </div>
            );
        }
    };

    return (
        <div className="Area-listar-assuntos">

            <button className="btn-Introducao-aos-conceitos" onClick={() => handleButtonClick('Introducao-aos-conceitos')}>
                Introdução aos conceitos
            </button>
            {renderOptions('Introducao-aos-conceitos')}


            <button className="btn-Teoria-das-cores" onClick={() => handleButtonClick('Teoria-das-cores')}>
                Teoria das Cores
            </button>
            {renderOptions('Teoria-das-cores')}


            <button className="btn-Midia-Estatica-Imagens" onClick={() => handleButtonClick('Midia-Estatica-Imagens')}>
                Midia Estática - Imagens
            </button>
            {renderOptions('Midia-Estatica-Imagens')}


            <button className="btn-Midia-Estatica-Textos" onClick={() => handleButtonClick('Midia-Estatica-Textos')}>
                Midia Estática - Textos
            </button>
            {renderOptions('Midia-Estatica-Textos')}


            <button className="btn-Midia-dinamica-Video-e-audio" onClick={() => handleButtonClick('Midia-dinamica-Video-e-audio')}>
                Midia Dinâmica - Vídeo e Áudio
            </button>
            {renderOptions('Midia-dinamica-Video-e-audio')}


            <button className="btn-Continuacao-audio" onClick={() => handleButtonClick('Continuacao-audio')}>
                Continuação - Áudio
            </button>
            {renderOptions('Continuacao-audio')}
        </div>
    );
}

export default SistemasMultimidia;