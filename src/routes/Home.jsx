import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const img = [
  'src/assets/imagem1.jpg',
  'src/assets/imagem2.jpg',
  'src/assets/imagem3.jpg',
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
  };

  useEffect(() => {
    const intervalo = setInterval(nextImg, 3000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="bg-blue-200 pt-[50px] pb-[50px] flex items-center">
      <div className="w-1/2 p-8">
        <h1 className="text-4xl font-bold mt-[-90px] text-black mb-6">
          Na GreenWave, transformamos o futuro com soluções inovadoras em energia sustentável, promovendo um planeta mais limpo e conectado para as próximas gerações.
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6  ">
          Somos uma empresa dedicada a fornecer soluções em energia sustentável, comprometida com a preservação do meio ambiente e o desenvolvimento de tecnologias limpas. Oferecemos energia renovável de alta qualidade, como solar e eólica, atendendo às demandas de residências, empresas e comunidades. Nossa missão é impulsionar a transição para um futuro mais verde, reduzindo a dependência de combustíveis fósseis e promovendo a conscientização sobre o impacto ambiental. Trabalhamos com inovação, responsabilidade e um profundo compromisso com um planeta mais sustentável.
        </p>
        <Link
          to="/sobre"
          className="ml-[370px] bg-gray-800 text-white text-lg font-medium py-2 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 mt-[20px]"
        >
          Saiba mais
        </Link>
      </div>

      <div className="w-1/2 flex justify-center">
        <img
          src={img[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-[800px] h-[500px] rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
