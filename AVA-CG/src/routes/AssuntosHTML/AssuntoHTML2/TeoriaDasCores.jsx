import { Link } from 'react-router-dom';
import "./TeoriaDasCores.css";

function TeoriaDasCores() {
    return (
        <div className="Area-Teoria-Das-Cores">
            <div className="Area-Conteudo2">
                <header>
                    <h1>Sistema Multimidia</h1>
                </header>
                <article>
                    <h1>Explorando a Teoria das Cores: Uma Jornada na Percepção Visual</h1>
                    <p>A teoria das cores é um campo fascinante que explora a natureza, a percepção e a interação das cores. Desde os primórdios da humanidade, as cores têm desempenhado um papel vital em nossas vidas, influenciando nossas emoções, comunicações e até mesmo nossas decisões.</p>
                
                    <h2>Fundamentos da Teoria das Cores</h2>
                    <p>Matiz: Refere-se à própria cor, como vermelho, azul, amarelo, etc. Cada matiz tem uma frequência específica no espectro de luz visível.</p>
                    <p>Saturação: Indica a pureza ou intensidade de uma cor. Cores altamente saturadas são vívidas e vibrantes, enquanto cores menos saturadas tendem a ser mais suaves ou desbotadas.</p>
                    <p>Luminosidade: Também conhecida como valor, é a claridade ou escuridão de uma cor. Cores com alta luminosidade são mais claras, enquanto cores com baixa luminosidade são mais escuras.</p>
                    <h2>Modelos de Cores</h2>
                    <p>Existem diferentes modelos para representar as cores, cada um com sua aplicação específica...</p>
                    <p>Modelo RGB: Baseado na adição de luz, é amplamente usado em dispositivos eletrônicos, como monitores e telas de computador. As cores são formadas pela combinação de vermelho (Red), verde (Green) e azul (Blue).</p>
                    <p>Modelo CMYK: Utilizado na indústria gráfica e de impressão, é um modelo subtrativo, onde as cores são formadas pela remoção de luz. CMYK representa as cores ciano (Cyan), magenta (Magenta), amarelo (Yellow) e preto (Key).</p>
                    <h2>Aplicações Práticas</h2>
                    <p>A teoria das cores tem uma ampla gama de aplicações em diversas áreas:</p>
                    <p>Arte e Design: Artistas e designers utilizam a teoria das cores para criar composições visualmente atraentes e transmitir mensagens emocionais ou conceituais.</p>
                    <p>Psicologia: Estudos mostram que as cores podem influenciar o humor, o comportamento e até mesmo a produtividade das pessoas. A psicologia das cores é usada em ambientes como marketing, design de interiores e terapia.</p>
                    <p>Ciência: Na ciência, a teoria das cores é fundamental para entender fenômenos como a dispersão da luz, óptica e percepção visual.</p>
                    <p>Tecnologia: A reprodução precisa de cores é essencial em campos como fotografia, cinematografia, design gráfico e impressão 3D.</p>
                    <br/>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ETEcBB3Lp-Q?si=J1dwHKRNHIace21I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </article>
                
            </div>
            <div className="Area-btns-de-Teoria">
                <Link to='/PDFViewer=Introducao-aos-Conceitos'>
                    <button className='PDF-Introducao'>
                        PDF: Introdução aos Conceitos
                    </button>
                </Link>
                <Link to='/SistemasMultimidia'>
                    <button className='Voltar-de-Teoria'>
                        Voltar
                    </button>
                </Link>
                <Link to='/PDFViewer=Teoria-das-Cores'>
                    <button className='PDF-Teoria'>PDF: Teoria das Cores</button>
                </Link>
            </div>
        </div>
    )
}

export default TeoriaDasCores;