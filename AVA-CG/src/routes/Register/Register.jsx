import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleRegisterClick = async () => {
        const userData = {
          'nome': nome,
          'email': email,
          'senha': senha
        };

        localStorage.setItem(email, JSON.stringify(userData));
        alert('Usuário cadastrado com sucesso!');
        navigate('/')

    //     try {
    //         const response = await axios.post('/Register', userData);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.error('Erro ao cadastrar o usuário:', error.message);
    //     }
     }

    return (
        <div className="Area-Register-e-Login">
            <div className="Area-login">
                <div className="imagem2">
                    <img src="./_6f869732-9047-475a-a3c9-f307d6e4d058-removebg-preview_1-removebg-preview.png" />
                </div>

                <div className="bem-vindo">
                    <b>BEM-VINDO!</b>
                    <p>comece a estudar agora
                        <br/>mesmo
                    </p>
                </div>
                
                <div className="back-btn">
                    <Link to='/'>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
            <div className="Area-Register">
                <div className="Conteúdo">
                    <div className="Register">CRIE SUA CONTA</div>
                    <form className="register-Form">
                        <input type="text" id="nome" className="register-Input" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
                        <input type="text" id="email" className="register-Input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" id="senha" className="register-Input" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
                        <div className="Area-btn-Register">
                            <div className="register-btn">
                                <button type="button" onClick={handleRegisterClick}>Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
}

export default Register;
