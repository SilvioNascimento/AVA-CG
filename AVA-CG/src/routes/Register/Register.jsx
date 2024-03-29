import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleRegisterClick = async () => {
        const userData = {
          'nome': nome,
          'email': email,
          'senha': senha
        };

        try {
            const response = await axios.post('/Register', userData);
            console.log(response.data);
        } catch (error) {
            console.error('Erro ao cadastrar o usuário:', error.message);
        }
    }

    return (
        <div className="Area-Register-e-Login">
            <div className="Area-Register">
                <div className="Register">CRIE SUA CONTA</div>
                <form className="register-Form">
                    <input type="text" id="nome" className="register-Input" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                    <input type="text" id="email" className="register-Input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" id="senha" className="register-Input" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                    <div className="Area-btn-Register">
                        <div className="register-btn">
                            <button type="button" onClick={handleRegisterClick}>Cadastrar</button>
                        </div>
                        <div className="back-btn">
                            <Link to='/'>
                                <button>Voltar para Login</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
