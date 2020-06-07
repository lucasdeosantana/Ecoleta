import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import './styles.css'
import { FiLogIn, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import DimmingScreenFindCity from '../../components/DimmingScreenFindCity'

const Home: React.FC = () => {

    const [Dimming, setDimming] = useState(false)
    console.log(Dimming)

  return(
      <div id="page-home">
          {Dimming && <DimmingScreenFindCity setOpenDimming={setDimming} />}
          <div className="content">
                <header>
                    <img src={ logo } alt="Ecoleta"/>
                    <Link to="/create-point">
                        <span><FiLogIn /></span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                </header>
                <main>
                    <h1>Seu Marketplace de coleta de Resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma
                        eficiente.
                    </p>
                    <a onClick={() => setDimming(true)}>
                        <span><FiSearch /></span>
                        <strong>Encontre um ponto de coleta</strong>
                    </a>    
                </main>
          </div>
      </div>
  );
}

export default Home;