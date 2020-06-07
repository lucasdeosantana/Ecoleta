import React from 'react';
import { FiCheckCircle } from "react-icons/fi";
import './styles.css';
import { Link } from 'react-router-dom'
const DimmingScreen: React.FC = () => {
  return (
      <Link to="/">
        <div className="dimming">
          <FiCheckCircle />
          <label>Ponto Cadastrado com Sucesso!</label>
        </div>
      </Link>
  );
}

export default DimmingScreen;