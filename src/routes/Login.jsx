import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const usuario = useRef();
  const senha = useRef();
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  function validade() {
    for (let i = 0; i < usuarios.length; i++) {
      if (
        usuarios[i].usuario === usuario.current.value &&
        usuarios[i].senha === senha.current.value
      ) {
        return true;
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validade()) {
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);
      sessionStorage.setItem('usuario', usuario.current.value);
      sessionStorage.setItem('senha', token);

      navigate('/Dashboard');
    } else {
      alert('Usuário/senha inválidos');
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/usuarios/')
      .then((res) => res.json())
      .then((res) => {
        setUsuarios(res);
      });
  }, []);

  return (
    <section>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <span>Faça seu Login</span>

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
              <button type="submit">Login</button>
            </div>

            <ul>
              <li>
                <span>Esqueceu sua senha?</span>
              </li>

              <li>
                <span>Não tem conta?</span>
                <Link to="/cadastrar">Criar</Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
