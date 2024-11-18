import { Link } from "react-router-dom";
const Sobre =()=>{
    return(
      <section className="min-h-screen">
        <h2>Sobre Nós</h2>
        <section> 
         
          <p>Bem-vindo ao nosso espaço dedicado à inovação em <strong>energias renováveis</strong>! <br></br>Nosso objetivo é unir tecnologia e sustentabilidade para facilitar a transição para um futuro mais verde e acessível.</p>

        </section>

        <h2>Nossas Soluções</h2>


        <section>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
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

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src="/img/card-top.jpg" alt="Green Wave"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Green Wave</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
            <Link to='/solucao' className="text-blue-950 underline">Saiba Mais</Link>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#energia</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sustentabilidade</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#solar</span>
          </div>
        </div>
        </section>

        <section>
          <h2>Por que Escolher Nossas Soluções?</h2>
          <p>Acreditamos que a tecnologia é uma ferramenta poderosa para acelerar a transição para fontes de energia limpa. <br />Com nossas soluções, buscamos:</p>
          <ul>
            <li>
            <strong>Reduzir o impacto ambiental</strong> ao promover fontes de energia sustentáveis.
            </li>
            <li>
              Tornar <strong>universal o acesso à energia</strong>
            </li>
            <li><strong>Contribuir para um futuro sustentável</strong>, combinando inovação com preservação.</li>
          </ul>
        </section>

        
      </section>
    )
  }
  export default Sobre;