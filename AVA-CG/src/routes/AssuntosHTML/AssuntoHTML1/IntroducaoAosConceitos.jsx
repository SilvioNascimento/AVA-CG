import { Link } from 'react-router-dom';
import './IntroducaoAosConceitos.css';

function IntroducaoAosConceitos() {

    return(
        <div className='Area-Introducao-aos-Conceitos'>
            <div className='Area-Conteudo1'>
                <header>
                    <h1>Sistema Multimidia</h1>
                </header>

                <article>
                    <h2>Introdução Sistema Multimidia</h2>
                    <p> Os sistemas multimídia representam uma convergência fascinante de diferentes formas de mídia, como texto, imagens, áudio, vídeo e interatividade, em uma única plataforma integrada. Desde os primeiros dias da computação até os avanços tecnológicos mais recentes, os sistemas multimídia têm desempenhado um papel significativo na forma como consumimos, interagimos e compartilhamos informações.</p>

                    <p> A essência dos sistemas multimídia reside na capacidade de fornecer uma experiência rica e envolvente, que vai além dos limites de uma única forma de mídia. Ao combinar elementos visuais, auditivos e interativos, os sistemas multimídia são capazes de transmitir mensagens de maneiras mais eficazes e emocionantes do que qualquer forma de mídia isoladamente.</p>
                        
                    <p> Esses sistemas têm aplicações variadas em uma ampla gama de setores, incluindo educação, entretenimento, negócios, saúde e muito mais. Eles são utilizados em salas de aula para tornar o aprendizado mais dinâmico e interativo, em plataformas de entretenimento para criar experiências imersivas e envolventes, e em ambientes empresariais para comunicar informações de forma eficaz e persuasiva.</p>
                        
                    <p> No entanto, a criação e o desenvolvimento de sistemas multimídia eficazes não são tarefas simples. Eles exigem uma combinação de habilidades técnicas e criativas, incluindo design de interface, programação, produção de mídia e psicologia do usuário. Além disso, é crucial considerar questões de acessibilidade, usabilidade e ética ao projetar e implementar sistemas multimídia.</p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/2VajWFwBFIs?si=DWPLQ4v9O2EjV9YV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p></p>
                    <p className='Final'> Neste contexto, esta introdução aos sistemas multimídia visa explorar os fundamentos, aplicações e desafios dessa área empolgante e em constante evolução. Ao longo deste processo, esperamos destacar o papel vital que os sistemas multimídia desempenham em nossa sociedade moderna e o potencial transformador que eles têm para moldar o futuro da comunicação e da interação humana.</p>
                </article>
                
            </div>
            <div className='Area-btns-de-Introducao'>

                <Link to='/SistemasMultimidia'>
                    <button className='btn-Voltar-de-Introducao'>
                        Voltar
                    </button>
                </Link>

                <Link to='/PDFViewer=Introducao-aos-Conceitos'>
                    <button className='btn-PDF-Introducao'>
                        PDF: Introdução aos Conceitos
                    </button>
                </Link>

                
            </div>
        </div>
        
    );
}

export default IntroducaoAosConceitos;