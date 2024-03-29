import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleRegisterClick = (e) => {
        e.preventDefault();
      
        // Crie um objeto com os dados do usuário
        const userData = {
          nome: nome,
          email: email,
          senha: senha
        };

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
                            <Link to='/'>
                                <button type="submit" onChange={(e) => handleRegisterClick(e)}>Cadastrar</button>
                            </Link>
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