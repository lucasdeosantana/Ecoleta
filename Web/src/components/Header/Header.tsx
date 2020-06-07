import React  from 'react';
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logo  from '../../assets/logo.svg'
import './style.css'

const Header: React.FC = (props) => {

  return (
      <header>
          <Link to="/"><img src={ logo } alt="Ecoleta"/></Link>
          <Link to="/">
              <FiArrowLeft />
              Voltar para a Home
          </Link>
      </header>)
}

export default Header;