import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom'
import UfCity from '../UfCity'

import { FiX  } from 'react-icons/fi'
import { propsDimmingScreenFindCityI, ufCityI } from '../../interfaces/appInterfaces'


const DimmingScreenFindCity: React.FC<propsDimmingScreenFindCityI> = ({ setOpenDimming }) => {
  const [city, setcity] = useState<ufCityI>({uf:'', city:''})
  return (
        <div className="dimming">
          <button id="close" onClick={()=>setOpenDimming(false)}><FiX /></button>
          <div className="container">
            <UfCity ufCity={city} setCity={setcity} />
            <Link to={{pathname: "/find-point/", search:`?uf=${city.uf}&city=${city.city}`}}>Buscar</Link>
          </div>
        </div>
  );
}

export default DimmingScreenFindCity;