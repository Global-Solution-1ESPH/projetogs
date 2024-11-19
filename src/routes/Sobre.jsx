import { Link } from "react-router-dom";
const Sobre =()=>{
    return(
      <section className="min-h-screen flex flex-col">
        
        <section className="h-1/3 flex flex-col gap-12 p-5"> 
        
          <h2 className="self-center text-4xl font-semibold mt-[10px]">Sobre Nós</h2>
          <p className="w-3/4 self-center text-center">Bem-vindo ao nosso espaço dedicado à inovação em <strong>energias renováveis</strong>! Nosso objetivo é unir tecnologia e sustentabilidade para facilitar a transição para um futuro mais verde e acessível.</p>

        </section>


        <section className="h-1/3 p-10 flex flex-col gap-10">
        <h2 className="self-center text-blue-200 text-2xl font-semibold p-4 bg-gray-800" style={{ borderRadius: '30px' }}>Nossas Soluções</h2>
        <div className="flex justify-around">
          <div class="max-w-sm rounded overflow-hidden shadow-xl">
            <img class="w-full" src="/img/card-top.jpg" alt="Smart Energy"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Smart Energy</div>
              <p class="text-gray-700 text-base">
                Dispositivo IoT feito para impulsionar o desenvolvimento das Microrredes no Brasil.
              </p>
              <Link to='/solucao' className="text-blue-950 underline">Saiba Mais</Link>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#energiaVerde</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sustentabilidade</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#microrredes</span>
            </div>
          </div>

          <div class="max-w-sm rounded overflow-hidden shadow-xl">
            <img class="w-full" src="../src/assets/paineis-solares.jpg" alt="Green Wave"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Economia com Painéis Solares</div>
              <p class="text-gray-700 text-base">
                Descubra quanto você pode economizar na conta de energia ao adotar uma solução sustentável com painéis solares.
              </p>
              <Link to='/solucao' className="text-blue-950 underline">Saiba Mais</Link>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#energia</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sustentabilidade</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#solar</span>
            </div>
          </div>
        </div>
        
        </section>

        <section className="flex flex-col w-full gap-10 items-center self-center p-8 bg-gray-800 mb-10">
          <h2 className="text-2xl font-semibold self-center text-white">Por que Escolher Nossas Soluções?</h2>
          <p className="text-white text-lg">Acreditamos que a tecnologia é uma ferramenta poderosa para acelerar a transição para fontes de energia limpa. <br />Com nossas soluções, buscamos:</p>
          <div className="w-3/4 bg-slate-600 flex flex-col items-center rounded-xl p-10">
          <ul>
            <li className="text-xl text-gray-200 ">
            <strong>Reduzir o impacto ambiental</strong> ao promover fontes de energia sustentáveis.
            </li>
            <li className="text-xl text-gray-200 ">
              Tornar <strong>universal o acesso à energia</strong>
            </li>
            <li className="text-xl text-gray-200 "><strong>Contribuir para um futuro sustentável</strong>, combinando inovação com preservação.</li>
            </ul>
          </div>
          
        </section>

        
      </section>
    )
  }
  export default Sobre;