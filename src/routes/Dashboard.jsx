import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    sessionStorage.removeItem("usuario");
    sessionStorage.removeItem("senha");
    sessionStorage.removeItem("nome");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("mensagem");
    
    alert("Saindo....");
    navigate("/");
  };

  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [setInformacoes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const response = await fetch("http://localhost:5000/informacoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      
      sessionStorage.setItem("nome", formData.nome);
      sessionStorage.setItem("email", formData.email);
      sessionStorage.setItem("mensagem", formData.mensagem);

      alert("Dados salvos com sucesso!");
      setFormData({ nome: "", email: "", mensagem: "" });
      fetchInformacoes();
    } else {
      alert("Erro ao salvar os dados.");
    }
  };

  const fetchInformacoes = async () => {
    const response = await fetch("http://localhost:5000/informacoes");
    const dados = await response.json();
    setInformacoes(dados);
  };

  
  useEffect(() => {
    
    const nome = sessionStorage.getItem("nome");
    const email = sessionStorage.getItem("email");
    const mensagem = sessionStorage.getItem("mensagem");

    if (nome && email && mensagem) {
      setFormData({ nome, email, mensagem });
    }

    fetchInformacoes();
  }, []);

  return (
    <>
          <div className="p-4 bg-gray-800 text-white flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold flex items-center">GreenWave</h1>
      <button
        onClick={handleLogout}
        className="flex items-center bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition"
      >
        <MdLogout className="mr-2" /> Sair
      </button>
    </div>

      <section className="h-1/3 flex flex-col gap-8 p-5 bg-blue-200 shadow-lg ">
        <h2 className="self-center text-4xl font-semibold mt-4">Bem-vindo</h2>
        <p className="w-3/4 self-center text-center text-lg leading-relaxed">
          Estamos felizes em tê-lo aqui novamente. Aproveite nossas ferramentas e entre em contato se precisar de ajuda.
        </p>
      </section>

      <section className="bg-gray-800 py-12">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Nossos Produtos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-teal-100 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <img src="../src/assets/solucao2.jpg" alt="Produto1" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">Smart Energy</h3>
          </div>
          <div className="p-6 bg-teal-100 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <img src="../src/assets/solucao1.jpg" alt="solucao2" className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              Sistema de Cotação para Energia Solar
            </h3>
          </div>
        </div>
      </section>




      <div className="flex flex-col justify-center items-center min-h-screen bg-blue-200">
  <div className="mb-8 text-center">
    <h2 className="text-4xl text-gray-800 font-bold">Suporte</h2>
    <p className="text-gray-700 text-lg mt-2">
      Precisa de ajuda? Entre em contato conosco através do formulário abaixo.
    </p>
  </div>
  <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
    <h1 className="text-2xl text-gray-800 font-bold mb-6 text-center">Contate-nos</h1>
    
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

    <button
      type="submit" className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700 transition duration-300">Enviar</button>
      </form>
    </div>


      
    </>
  );
};

export default Dashboard;
