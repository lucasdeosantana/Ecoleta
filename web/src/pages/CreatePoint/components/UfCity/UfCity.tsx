import React, {useState, useContext, useEffect, ChangeEvent} from 'react';
import axios from 'axios'
import contextCreatePoint from '../../context'
interface IBGEResponse{
    sigla:string
}
interface IBGECityResponse{
    nome:string
}

const UfCity: React.FC = () => {
    const [ufs, setufs] = useState<string[]>([])
    const [citiesName, setcitiesName] = useState<string[]>([])
    const [ufSelected, setufSelected] = useState('0')
    const [citySelected, setcitySelected] = useState('0')

    const context = useContext(contextCreatePoint)

    useEffect(() => {
        if(ufSelected==="0"){
            return;
        }
        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelected}/municipios`)
        .then(response =>{
            const citiesResponse =  response.data.map(city=>city.nome)
            setcitiesName(citiesResponse)
        })}, [ufSelected])


    useEffect(()=>{
        axios.get<IBGEResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response =>{
                const ufInitials = response.data.map(uf => uf.sigla)
                setufs(ufInitials)
            })},[])


    function handleSelectUf(event:ChangeEvent<HTMLSelectElement>){
        setufSelected(event.target.value)
        context.uf = event.target.value
    }
    function handleSelectCity(event:ChangeEvent<HTMLSelectElement>){
        setcitySelected(event.target.value)
        context.city=event.target.value
    }

  return (
    <div className="field-group">
        <div className="field">
            <label htmlFor="uf">Estado (uf)</label>
            <select name="uf" id="uf" value={ufSelected} onChange={handleSelectUf} required>
                <option value="">Selecione seu Estado</option>
                {ufs.map(uf =>(
                    <option key={uf} value={uf}>{uf}</option>
                ))}
            </select>
        </div>
        <div className="field">
            <label htmlFor="city">Cidade</label>
            <select name="city" id="city" value={citySelected} onChange={handleSelectCity} required>
                <option value="">Selecione sua Cidade</option>
                {citiesName.map(city =>(
                    <option key={city} value={city}>{city}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default UfCity;