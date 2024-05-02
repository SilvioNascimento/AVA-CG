import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import './SistemasMultimidia.css';


const SistemasMultimidia = () => {

    const navigate = useNavigate();

    const [selectedContent, setSelectedContent] = useState(null);
    const [activeContent, setActiveContent] = useState(null);
    const [displayText, setDisplayText] = useState("SELECIONE O ASSUNTO DESEJADO");

    const handleClick = () => {
        Swal.fire({
            title: 'Você tem certeza que quer realizar o Logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/');  // Redireciona para a página principal
            }
            // Não é necessário fazer mais nada caso `isDenied` ou `isDismissed` porque você quer que o usuário permaneça na mesma página
        });
    }
    


    const handleButtonClick = (content, text) => {
        if (activeContent === content) {
            // Se o conteúdo já está ativo, desative-o
            setSelectedContent(null);
            setActiveContent(null);
            setDisplayText("SELECIONE O ASSUNTO DESEJADO");
        } else {
            // Atualize o conteúdo baseado no botão clicado e defina o botão como ativo
            setActiveContent(content);  // Define o botão como ativo antes de alterar o conteúdo
            setDisplayText(text);
            switch (content) {
                case 'Introducao-aos-conceitos':
                    setSelectedContent(
                        <div className='Area-btns-opcoes'>
                            <Link to='/Introducao-aos-Conceitos'>
                                <button className='HTML'>Conteúdo em HTML</button>
                            </Link>
                            <Link to ='/PDFViewer=Introducao-aos-Conceitos'>
                                <button className='Leitor-PDF' >Leitor PDF</button>
                            </Link>
                        </div>
                    );
                    break;
                case 'Teoria-das-cores':
                    setSelectedContent(
                        <div className='Area-btns-opcoes'>
                            <Link to='/Teoria-das-Cores'>
                                <button className='HTML'>Conteúdo em HTML</button>
                            </Link>
                            <Link to='/PDFViewer=Teoria-das-Cores'>
                                <button className='Leitor-PDF' >Leitor PDF</button>
                            </Link>   
                        </div>
                    );
                    break;
                case 'Midia-Estatica-Imagens':
                    setSelectedContent(
                        <div className='Area-btns-opcoes'>
                            <Link to='/Midia-Estatica_Imagem'>
                                <button className='HTML'>Conteúdo em HTML</button>
                            </Link>
                            <Link to='/PDFViewer=Mídia-Estática_Imagem'>
                                <button className='Leitor-PDF' >Leitor PDF</button>
                            </Link>
                        </div>
                    );
                    break;
                case 'Midia-dinamica-Video-e-audio':
                    setSelectedContent(
                        <div className='Area-btns-opcoes'>
                            <Link to='/Midia-Dinamica_Video-E-Audio'>
                                <button className='HTML'>Conteúdo em HTML</button>
                            </Link>
                            <Link to='/PDFViewer=Midia-Dinamica_Video-E-Audio'>
                                <button className='Leitor-PDF' >Leitor PDF</button>
                            </Link>
                        </div>
                    );
                    break;
                default:
                    setSelectedContent(null);
            }
        }
    };
   

    return (
        <div>
            <div className="Area-Sistemas-Multimidia">
            
                <div className="Area-btns">
                    <div className='assunto'>
                        ASSUNTOS
                    </div>

                    <button className="btn-Introducao-aos-conceitos" onClick={() => handleButtonClick('Introducao-aos-conceitos', '')}>
                        INTRODUÇÃO AOS CONCEITOS
                    </button>

                    <button className="btn-Teoria-das-cores" onClick={() => handleButtonClick('Teoria-das-cores', '')}>
                        TEORIA DAS CORES
                    </button>

                    <button className="btn-Midia-Estatica-Imagens" onClick={() => handleButtonClick('Midia-Estatica-Imagens', '')}>
                        MÍDIA ESTÁTICA - IMAGEM
                    </button>

                    <button className="btn-Midia-dinamica-Video-e-audio" onClick={() => handleButtonClick('Midia-dinamica-Video-e-audio', '')}>
                        MÍDIA DINÂMICA - VÍDEO E ÁUDIO
                    </button>


                </div>
                <div className="Area-opcoes">
                    <p className="texto-opcoes">{displayText}</p>
                    {selectedContent}
                </div>
            </div>
            <div className="Area-btns-config">
                <Link to='/Disciplinas'>
                    <button >Disciplinas</button>
                </Link>
                <button onClick={() => handleClick()}>Sair</button>
            </div>
        </div>
    );
}

export default SistemasMultimidia;
