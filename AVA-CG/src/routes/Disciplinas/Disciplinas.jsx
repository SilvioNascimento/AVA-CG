import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import './Disciplinas.css';

const Disciplinas = () => {

    const navigate = useNavigate();

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
            
        });
    }

    return (
        <div>
            <div className="Area-btns-disciplinas">
                
                <b>DISCIPLINAS</b>
                <div className="btns-disciplinas">
    
                    <Link to='/SistemasMultimidia'>
                        <button className="btn-Sistemas-Multimidia">
                            <h1>Sistemas Multimídia</h1>
                        </button>
                    </Link>
    
                    <Link to='/Maintenance'>
                        <button className="btn-Matemática">
                            <h1>Matemática</h1>
                        </button>
    
                    </Link>
                    <Link to='/Maintenance'>
                        <button className="btn-Português">
                            <h1>Português</h1>
                        </button>
                    </Link>
    
                    <Link to='/Maintenance'>
                        <button className="btn-Física">
                            <h1>Física</h1>
                        </button>
                    </Link>
    
                    <Link to='/Maintenance'>                    
                        <button className="btn-Física">
                            <h1>Biologia</h1>
                        </button>
                    </Link>
    
                    <Link to='/Maintenance'>
                        <button className="btn-Física">
                            <h1>Artes</h1>
                        </button>
                    </Link>
    
    
                    
                </div>
            </div>
            <div className="Area-btns-config1">
                <button onClick={() => handleClick()}>Sair</button>
            </div>
        </div>
    );
}

export default Disciplinas;