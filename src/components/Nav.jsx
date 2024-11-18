import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      <div className="bg-gray-800 p-4 top-0 z-10">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8">
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
            <Link to="/sobre" className="text-white hover:text-gray-400">Sobre</Link>
            <Link to="/solucao" className="text-white hover:text-gray-400">Solução</Link>
          </div>
          <div className="flex space-x-6">
            <Link to="/login" className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Login</Link>
            <Link to="/cadastrarusuario" className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Cadastro</Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Nav;
  