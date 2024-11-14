import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const usuario = useRef();
  const senha = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  
  };

  return (
    <section>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
 
            <h1>Faça seu Login</h1>

            <div>
              <input
                type="text"
                id="usuario"
                ref={usuario}
                placeholder="Usuário"
              />
            </div>

            <div>
              <input
                type="password"
                id="senha"
                ref={senha}
                placeholder="Senha"
              />
            </div>

            <div>
              <button type="submit">
                Login
              </button>
            </div>

            <ul>
              <li>
                <span>Esqueceu sua senha?</span>
              </li>
              <li>
                <span>Não tem conta? </span>
                <Link to="/cadastrar">
                  Criar
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
