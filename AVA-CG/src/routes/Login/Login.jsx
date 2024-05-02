//import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLoginClick = (e) => {
        e.preventDefault();

        const userDataJSON = localStorage.getItem(email);
        if (userDataJSON) {
            const userData = JSON.parse(userDataJSON);
            // Verificar se a senha inserida corresponde à senha armazenada
            if (senha === userData.senha) {
                // Se as credenciais estiverem corretas, redirecione para a página desejada
                navigate("/Disciplinas");
            } else {
                alert("Senha incorreta. Por favor, tente novamente.");
            }
        } else {
            alert("Usuário não cadastrado. Por favor, verifique seu email ou cadastre-se.");
        }
    }

    return (
        <div className="Area-Login">
            <div className="area-esquerda">
                <div className="Conteúdo1">
                    <div className="imagem1">
                        <img src="./_6f869732-9047-475a-a3c9-f307d6e4d058-removebg-preview_1-removebg-preview.png" />
                    </div>
                    <div className="Bem-Vindo">
                        <h5>BEM-VINDO 
                            <br/>DE VOLTA!</h5>
                        <p>comece a estudar agora 
                            <br/>mesmo</p>
                    </div>
                </div>
                
            </div>
            <div className="area-direita">
                <div className="Conteúdo2">
                    <div className="Entrar">
                        <h5>Entrar</h5>
                    </div>
                    <form className="Login-Form">
                        <input type='text' id='email' className='loginInput' value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>

                        <input type='password' id='senha'  className='loginInput' value={senha} placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>

                        <div className="login-btn">
                            {/* Remova o Link e o button type="submit" */}
                            <button onClick={(e) => handleLoginClick(e)}><b>Entrar</b></button>
                        </div>
                    </form>

                    <div className="Area-Register-btn">
                        <p>Novo por aqui?
                            <Link to='/Register'>
                                <button>
                                    Cadastre-se
                                </button>
                            </Link>
                        </p>
                    
                    </div>
                </div>
                
                
            </div>
            
        </div>
    );
}

export default Login;
