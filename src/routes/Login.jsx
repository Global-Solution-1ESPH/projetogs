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
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-2xl font-bold text-center mb-6">Faça seu Login</h1>

          <div>
            <input
              type="text"
              id="usuario"
              ref={usuario}
              placeholder="Usuário"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              id="senha"
              ref={senha}
              placeholder="Senha"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>

          <ul className="text-center mt-4 text-gray-600">
            <li>
              <span>Esqueceu sua senha?</span>
            </li>
            <li className="mt-2">
              <span>Não tem conta? </span>
              <Link to="/cadastrarusuario" className="text-blue-600 hover:underline">
                Criar
              </Link>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
};

export default Login;
