//import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="Area-Login">
            <div className="Login">
                <h1>Página de Login</h1>
            </div>

            <div className="Area-btn-Login">
                <Link to={'/disciplinas'}>
                    <button className="btn-Login">
                        Realizar login
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Login;