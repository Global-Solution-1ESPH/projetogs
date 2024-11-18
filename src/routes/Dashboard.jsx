import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    senha: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Dados enviados:\nNome: ${formData.nome}\nEmail: ${formData.email}\nMensagem: ${formData.mensagem}`);
    setFormData({ nome: "", email: "", senha: "", mensagem: "" }); // Reseta o formulário
  };

  return (
    <>
      <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition"
        >
          <MdLogout className="mr-2" /> Sair
        </button>
      </div>

      {/* Formulário */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Formulário</h1>

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

          {/* Senha */}
          <div className="mb-4">
            <label htmlFor="senha" className="block text-gray-700 font-medium mb-2">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
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
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
