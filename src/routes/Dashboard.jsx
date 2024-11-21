import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    alert("Saindo....");
    navigate("/");
  };

  // Estado para o formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [dados, setDados] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envia os dados para o backend
    const response = await fetch("http://localhost:3001/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Dados salvos com sucesso!");
      setFormData({ nome: "", email: "", mensagem: "" });
      fetchData();
    } else {
      alert("Erro ao salvar os dados.");
    }
  };

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/dados");
    const dados = await response.json();
    setDados(dados);
  };

  // Carrega os dados ao iniciar
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition"
        >
          <MdLogout className="mr-2" /> Sair
        </button>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-blue-200">
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-6 text-center">Contate-nos</h1>

          {/* Nome */}
          <div className="mb-4">
            <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Mensagem */}
          <div className="mb-4">
            <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botão de Enviar */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-xl font-bold">Dados salvos</h2>
        <ul>
          {dados.map((dado, index) => (
            <li key={index}>
              <p><strong>Nome:</strong> {dado.nome}</p>
              <p><strong>Email:</strong> {dado.email}</p>
              <p><strong>Mensagem:</strong> {dado.mensagem}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
