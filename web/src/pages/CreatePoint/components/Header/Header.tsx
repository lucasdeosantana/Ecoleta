import React  from 'react';
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logo  from '../../../../assets/logo.svg'


const Header: React.FC = (props) => {

  return (
      <header>
          <img src={ logo } alt="Ecoleta"/>
          <Link to="/">
              <FiArrowLeft />
              Voltar para a Home
          </Link>
      </header>)
}

export default Header;