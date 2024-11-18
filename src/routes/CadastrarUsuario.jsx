import { useParams, Link, useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import { useState, useEffect } from "react";

const CadastrarUsuario = () => {
  let { id } = useParams();

  const [usuarios, setUsuarios] = useState({
    id,
    usuario: "",
    senha: "",
  });

  const navigate = useNavigate();

  let metodo = "post";
  if (id) {
    metodo = "put";
  }

  const handleChange = (e) => {
    setUsuarios({ ...usuarios, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/usuarios/${id ? id : ""}`, {
      method: metodo,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarios),
    }).then(() => {
      navigate("/login");
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
    <section className="flex justify-center items-center pt-[220px] pb-[225px] bg-blue-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-2xl font-bold text-center mb-6">Cadastrar Usuário</h1>

          <div>
            <input
              type="text"
              name="usuario"
              placeholder="Digite seu Usuário"
              value={usuarios.usuario}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="senha"
              placeholder="Digite sua Senha"
              value={usuarios.senha}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition duration-200"
          >
            Cadastrar
          </button>

          <div className="text-center mt-4 text-gray-600">
            <Link
              to="/login"
              className="flex justify-center items-center space-x-2 text-gray-800 hover:underline"
            >
              <ImCancelCircle />
              <span>Cancelar</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CadastrarUsuario;
