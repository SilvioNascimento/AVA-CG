//import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLoginClick = (e) => {
        e.preventDefault();
        // Verificação de email e senha padrão
        if (email === "silvio.estudante19@gmail.com" && senha === "queromudar100") {
            // Se as credenciais estiverem corretas, redirecione para a página de disciplinas
            navigate("/disciplinas");
        } else {
            // Caso contrário, exiba uma mensagem de erro ou realize outra ação desejada
            alert("Credenciais inválidas. Por favor, tente novamente.");
        }
    }

    return (
        <div className="Area-Login">
            <div className="Login">
                <h1>Página de Login</h1>
            </div>

            <form className="login-Form">
                <label htmlFor='email' className='loginLabel'>Email do usuário</label>
                <input type='text' id='email' className='loginInput' value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor='senha' className='loginLabel'>Senha</label>
                <input type='password' id='senha'  className='loginInput' value={senha} onChange={(e) => setSenha(e.target.value)}/>

                <div className="login-btn">
                    {/* Remova o Link e o button type="submit" */}
                    <button onClick={(e) => handleLoginClick(e)}>Entrar</button>
                </div>
            </form>
            <div className="Area-Register-btn">
                <Link to='/Register'>
                    <button className="Register-btn">
                        É a sua primeira vez? Cadastre-se agora mesmo!
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
