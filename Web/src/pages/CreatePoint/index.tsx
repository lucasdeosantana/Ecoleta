import React,  { FormEvent, useContext }  from 'react';
import Header from "../../components/Header"
import Maps  from "../../components/Maps";
import UfCity from '../../components/UfCity'
import ContactData from '../../components/ContactData'
import SelectItems from '../../components/SelectItems'
import api from '../../services/api'
import './styles.css';
import contextCreatePoint from "./context";



const CreatePoint: React.FC = () => {
    
    const pointData = useContext(contextCreatePoint)
    async function handleSubmit(event:FormEvent){
        event.preventDefault()
        await api.post('points', pointData).then( response =>{
        })
    }

  return(
    <div id="page-create-point">
        <Header />
        <form onSubmit={handleSubmit}>
            <h1>
                Cadastro de Pontos de Coletas
            </h1>
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