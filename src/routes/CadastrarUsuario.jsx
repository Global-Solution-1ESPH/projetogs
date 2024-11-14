import { useParams, Link, useNavigate } from 'react-router-dom';
import { ImCancelCircle } from 'react-icons/im';
import { useState, useEffect } from 'react';

const CadastrarUsuario = () => {
  let { id } = useParams();

  const [usuarios, setUsuarios] = useState({
    id,
    usuario: '',
    senha: '',
  });

  const navigate = useNavigate();

  let metodo = 'post';
  if (id) {
    metodo = 'put';
  }

  const handleChange = (e) => {
    setUsuarios({ ...usuarios, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/usuarios/${id ? id : ''}`, {
      method: metodo,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuarios),
    }).then(() => {
      navigate('/login');
    });
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/usuarios/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUsuarios(data);
        });
    }
  }, [id]);

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Cadastrar Usuário</h1>

        <div className="mb-4">
          <input
            type="text"
            name="usuario"
            placeholder="Digite seu Usuário"
            value={usuarios.usuario}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            value={usuarios.senha}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Cadastrar
        </button>

        <div className="mt-4 flex justify-center items-center text-gray-600">
          <Link to="/login" className="flex items-center space-x-1 hover:text-blue-500">
            <ImCancelCircle />
            <span>Cancelar</span>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default CadastrarUsuario;