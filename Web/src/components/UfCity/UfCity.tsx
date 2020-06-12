import React, {useState, useEffect, ChangeEvent} from 'react';
import { ufResponseI, citiesResponseI  } from '../../interfaces/backendInterfaces'
import api from '../../services/api'
import { prospsUfCityI } from '../../interfaces/appInterfaces';


const UfCity: React.FC<prospsUfCityI> = ({ setCity, ufCity }) => {

    const [ufsList, setUfsList] = useState<ufResponseI[]>([])
    const [citiesName, setCitiesName] = useState<citiesResponseI[]>([])

    useEffect(() => {
        if(ufCity.uf===""){
            return;
        }
        api.get<citiesResponseI[]>(`cities/${ufCity.uf}`)
        .then(response =>{
            const citiesResponse =  response.data
            setCitiesName(citiesResponse)
    })}, [ufCity])

    useEffect(()=>{
        api.get<ufResponseI[]>('uf')
            .then((response) =>{
                const ufInitials = response.data
                setUfsList(ufInitials)
            })
    },[])


    function handleSelectUf(event:ChangeEvent<HTMLSelectElement>){
        setCity({uf:event.target.value, city:""})
    }
    function handleSelectCity(event:ChangeEvent<HTMLSelectElement>){
        setCity({...ufCity, city:event.target.value})
    }

  return (
    <div className="field-group">
        <div className="field">
            <label htmlFor="uf">Estado (uf)</label>
            <select name="uf" id="uf" value={ufCity.uf} onChange={handleSelectUf} required>
                <option value="">Selecione seu Estado</option>
                {ufsList.map(uf =>(
                    <option key={uf.codigo_uf} value={uf.uf}>{uf.name}</option>
                ))}
            </select>
        </div>
        <div className="field">
            <label htmlFor="city">Cidade</label>
            <select name="city" id="city" value={ufCity.city} onChange={handleSelectCity} required>
                <option value="">Selecione sua Cidade</option>
                {citiesName.map(city =>(
                    <option key={city.codigo_ibge} value={city.name}>{city.name}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default UfCity;