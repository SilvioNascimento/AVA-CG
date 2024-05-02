import './ErrorPage.css';
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="Area-Error">
            <img src='./public/erro-aviso-para-pagina-web-banner-apresentacao-midia-social-documentos-post.png' />
            <h1>Erro 404!</h1>

            <Link to='/'>
                <button className='btn-para-login'>
                    Página de Login
                </button>
            </Link>
        </div>
    );
}

export default ErrorPage;