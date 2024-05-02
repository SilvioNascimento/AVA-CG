import { Link } from 'react-router-dom';
import './MidiaEstaticaImagem.css';


function MidiaEstaticaImagem() {

    return (
        <div className='Area-Midia-Estatistica'>
            <div className='Area-Conteudo3'>
                <header>
                    <h1>Sistema Multimidia</h1>
                    
                </header>
                <article>
                    <h2>Mídia Estática - Imagem</h2>
                    <p>A mídia estática, como a imagem, desfruta de uma longa história como uma forma de comunicação visual poderosa. Enquanto a mídia dinâmica, como vídeo e animação, tem sua própria atração e eficácia, as imagens estáticas têm uma qualidade única que continua a cativar e influenciar.</p>

                    <p>As imagens estáticas têm a capacidade de capturar um momento no tempo, congelando-o para a eternidade. Elas podem transmitir emoções, contar histórias e transmitir mensagens complexas em um único quadro. Desde obras de arte clássicas até fotografias contemporâneas, as imagens estáticas têm sido uma forma de expressão artística que atravessa culturas e gerações.</p>
                        
                    <p>Uma das grandes vantagens das imagens estáticas é a sua acessibilidade e facilidade de consumo. Em um mundo onde o tempo é precioso e a atenção é fragmentada, uma imagem pode transmitir uma mensagem rápida e eficazmente. É por isso que as imagens são amplamente utilizadas em publicidade, mídia social, jornalismo e muitos outros contextos para chamar a atenção do espectador e transmitir uma ideia ou conceito de forma instantânea.</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/rmKqqhz4I_w?si=eyOMzjmcLyv2TOmP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p>Além disso, as imagens têm o poder de transcender as barreiras linguísticas e culturais. Uma imagem pode ser compreendida e apreciada por pessoas de diferentes origens e contextos, tornando-se uma forma de comunicação universal.</p>

                    <p>No entanto, é importante reconhecer que, assim como qualquer forma de mídia, as imagens estáticas também têm suas limitações. Elas fornecem apenas um instantâneo de uma narrativa e podem ser interpretadas de maneiras diferentes por diferentes pessoas. Além disso, as imagens podem ser manipuladas e editadas para distorcer a verdade ou transmitir uma mensagem enganosa, destacando a importância da alfabetização visual e da análise crítica da mídia.</p>
                        
                    <p className='Final'>Em suma, as imagens estáticas desempenham um papel fundamental na comunicação visual, oferecendo uma forma poderosa e acessível de transmitir mensagens, contar histórias e provocar emoções. Seja em obras de arte, fotografia jornalística, publicidade ou mídia social, as imagens estáticas continuam a ser uma ferramenta indispensável para comunicadores e artistas em todo o mundo.</p>
                </article>
            </div>
            <div className='Area-btns-Midia-Estatica'>
                <Link to='/PDFViewer=Teoria-das-Cores'>
                    <button className='PDF-Teoria-das-Cores'>PDF: Teoria das Cores</button>
                </Link>

                <Link to='/SistemasMultimidia'>
                    <button className='Voltar-de-Midia'>Voltar</button>
                </Link>

                <Link to='/PDFViewer=Mídia-Estática_Imagem'>
                    <button className='PDF-Midia'>PDF: Mídia Estática - Imagem</button>
                </Link>
            </div>
        </div>
    
    );
}

export default MidiaEstaticaImagem;