import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <h3>Contabilista</h3>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/create">Criar</Link>
                </li>
                <li>
                    <Link to="/lists">Listas</Link>
                </li>
                <li>
                    <Link to="/costs">Gastos</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header