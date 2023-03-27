import React from 'react'
import CriarImage from '../Assets/images/Criar.png';
import AdministrarImage from '../Assets/images/Administrar.png';
import ContabilizarImage from '../Assets/images/Contabilizar.png';

const About = () => {
  return (
    <div className='about container'>
      <h3>O que pode fazer?</h3>
      <div className='functions row text-center'>
        <div class="col-md-4">
          <img src={CriarImage} alt='memo'></img>
          <h4 >Criar listas</h4>
        </div>
        <div class="col-md-4">
          <img src={AdministrarImage} alt='check list'></img>
          <h4>Administrar</h4>
        </div>
        <div class="col-md-4">
          <img src={ContabilizarImage} alt='graph'></img>
          <h4>Contabilizar</h4>
        </div>
      </div>
      <p>3 ações em uma única plataforma.<br></br>
         A maioria dos aplicativos de lista de compra é só para criar listas e organizar compras. Porém, esse aplicativo faz diferença. Dentro dessa plataforma, consegue administrar as listas e mostra os gastos para melhorar o fluxo de caixa no futuro. Bora começar?
      </p>
      <button href="#">Criar lista</button>
    </div>
  )
}

export default About