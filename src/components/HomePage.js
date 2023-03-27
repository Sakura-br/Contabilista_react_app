import React from 'react';
import About from './About';
import CalculadorImage from '../Assets/images/Calculador.png';
import ShoppingCartImage from '../Assets/images/ShoppingCart.png';


const HomePage = () => {
  return (
    <div>
      <div className='PageTop'>
        <div className='PageTopText'>
          <h1>Contabilista</h1>
          <p>Criar, administrar, contabilizar</p>
          <p>3 ações em uma única plataforma</p>
        </div>
        <div className='PageTopImages'>
          <img src={CalculadorImage} className='CalculadorImage'/>
          <img src={ShoppingCartImage} className='ShoppingCartImage'/>
        </div>
      </div>
      <div className='about'>
        <About />
      </div>
    </div>
  )
}

export default HomePage