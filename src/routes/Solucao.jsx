const Solucao = () => {
  return (
    <>
        <div className="bg-blue-200">

        <section className="h-1/3 flex flex-col gap-12 p-5"> 
        
          <h2 className="self-center text-4xl font-semibold mt-[10px]">Soluções</h2>
          <p className="w-3/4 self-center text-center">Oferecemos soluções inovadoras e personalizadas para impulsionar o sucesso do seu negócio. Nossa missão é simplificar processos, otimizar resultados e trazer eficiência por meio de tecnologias e estratégias inteligentes.

Seja para transformar ideias em realidade ou melhorar o desempenho da sua empresa, temos a solução ideal. Vamos juntos construir o futuro!</p>

        </section>

          <div className="p-10 flex justify-around">
        
            <div className="bg-white max-w-sm rounded overflow-hidden shadow-xl">
              <img className="w-full" src="../src/assets/solucao2.jpg" alt="Smart Energy"/>
              <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Smart Energy</div>
                  <p className="text-gray-700 text-base">Uma solução de IoT projetada para facilitar a implementação das microrredes. O sistema utiliza sensores para monitorar dados críticos, como tensão, temperatura e luminosidade, em tempo real, fornecendo informações precisas para otimizar o uso de recursos, identificar falhas e aumentar a eficiência energética.</p>
                  
                </div>
              </div>

              <div className="bg-white max-w-sm rounded overflow-hidden shadow-xl">
                <img className="w-full" src="../src/assets/solucao1.jpg" alt="Sistema de Cotação para Energia Solar"/>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Sistema de Cotação para Energia Solar</div>
                  <p className="text-gray-700 text-base">O menu apresentado pertence a um sistema interativo da "Green Wave – Soluções em Energia Solar" e oferece ferramentas úteis para quem deseja adotar energia solar. As opções permitem calcular custos de instalação, estimar a economia mensal, determinar o tempo de retorno do investimento, gerar gráficos comparativos e entrar em contato com a empresa.</p>
                  
                </div>
            </div>

          </div>
        </div>  
    </>
    
  );
};

export default Solucao;
