import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const hiddenRoutes = ["/dashboard"]; 
  const currentPath = location.pathname.toLowerCase();
  console.log("Rota atual normalizada:", currentPath);

  if (hiddenRoutes.includes(currentPath)) {
    return null;
  }

  return (
    <div className="bg-gray-800 p-4 top-0 z-10">
      <div className="flex justify-between items-center">
        <h1 className='text-blue-200 text-[30px] ml-[10px]'>GreenWave</h1>
        <div className="flex space-x-8">
          <Link to="/" className="ml-[40px] text-white hover:text-blue-200">Home</Link>
          <Link to="/sobre" className="text-white hover:text-blue-200">Sobre</Link>
          <Link to="/solucao" className="text-white hover:text-blue-200">Solução</Link>
        </div>
        <div className="flex space-x-6">
          <Link to="/login" className="border border-blue-200 text-blue-200 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Login</Link>
          <Link to="/cadastrarusuario" className="border border-blue-200 text-blue-200 px-4 py-2 rounded hover:bg-blue-500 hover:text-white">Cadastro</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
