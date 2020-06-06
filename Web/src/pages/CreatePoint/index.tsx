import React,  { FormEvent, useContext }  from 'react';
import Header from "../../components/Header"
import Maps  from "../../components/Maps";
import UfCity from '../../components/UfCity'
import ContactData from '../../components/ContactData'
import SelectItems from '../../components/SelectItems'
import DropZone from '../../components/DropZone'
import api from '../../services/api'
import './styles.css';
import contextCreatePoint from "./context";



const CreatePoint: React.FC = () => {
    
    const pointData = useContext(contextCreatePoint)
    async function handleSubmit(event:FormEvent){
        event.preventDefault()
        const data = new FormData()
        data.append('name', pointData.name)
        data.append('email', pointData.email)
        data.append('whatsapp', pointData.whatsapp)
        data.append('city', pointData.city)
        data.append('uf', pointData.uf)
        data.append('latitude', String(pointData.latitude))
        data.append('longitude', String(pointData.longitude))
        data.append('items', pointData.items.join(','))
        if(pointData.image!==undefined){
            console.log(pointData.image)
            data.append('image', pointData.image)
        }

        await api.post('points', data).then( response =>{
            
        })
    }

  return(
    <div id="page-create-point">
        <Header />
        <form onSubmit={handleSubmit}>
            <h1>
                Cadastro de Pontos de Coletas
            </h1>

            <DropZone />
            <ContactData />
            <fieldset>
                <legend>
                    <div className="d-flex-betweeen">
                        <h2>Endereço</h2>
                        <span>Selecione o Endereço no Mapa</span>
                    </div>
                </legend>   
                <Maps />
                <UfCity />
            </fieldset>
            <fieldset>
                <legend>
                    <div className="d-flex-betweeen">
                        <h2>Itens de Coleta</h2>
                        <span>Selecione os items recebidos.</span>
                    </div>
                </legend>
                <SelectItems />
            </fieldset>
            <button type="submit">
                Cadastrar Ponto de Coleta
            </button>
        </form>
    </div>
  )
}


export default CreatePoint;