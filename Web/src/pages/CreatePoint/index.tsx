import React,  { FormEvent, useContext, useState }  from 'react';
import Header from "../../components/Header"
import Maps  from "../../components/Maps";
import UfCity from '../../components/UfCity'
import ContactData from '../../components/ContactData'
import SelectItems from '../../components/SelectItems'
import DropZone from '../../components/DropZone'
import DimmingScreen from '../../components/DimmingScreen'
import api from '../../services/api'
import './styles.css';
import contextCreatePoint from "./context";
import { ufCityI, contactDataI } from '../../interfaces/appInterfaces'

const CreatePoint: React.FC = () => {

    const [city, setcity] = useState<ufCityI>({uf:'', city:''})
    const [contactData, setContactData] = useState<contactDataI>({name:'', email:'', whatsapp:''})
    const [latLong, setLatLong] = useState<[number, number]>([0,0])
    const [sucess, setSucess] = useState(false)
    const [items, setItems] = useState<number[]>([])
    const [image, setImage] = useState<File>()
    const pointData = useContext(contextCreatePoint)

    async function handleSubmit(event:FormEvent){
        event.preventDefault()
        const data = new FormData()
        data.append('name', contactData.name)
        data.append('email', contactData.email)
        data.append('whatsapp', contactData.whatsapp)
        data.append('city', city.city)
        data.append('uf', city.uf)
        data.append('latitude', String(latLong[0]))
        data.append('longitude', String(latLong[1]))
        data.append('items', items.join(','))
        if(image){
            data.append('image', image)
        }
        console.log(city, contactData, latLong, items, image)
        await api.post('points', data).then( response =>{
                if(response.status=200){
                    setSucess(true)
                }
            }
        )
    }

  return(
    
    <div id="page-create-point">
        {sucess && <DimmingScreen />}
        <Header />
        <form onSubmit={handleSubmit}>
            <h1>
                Cadastro de Pontos de Coletas
            </h1>

            <DropZone setFile={setImage}/>
            <ContactData data={contactData} setData={setContactData} />
            <fieldset>
                <legend>
                    <div className="d-flex-betweeen">
                        <h2>Endereço</h2>
                        <span>Selecione o Endereço no Mapa</span>
                    </div>
                </legend>   
                <UfCity ufCity={city} setCity={setcity} />
                <Maps ufCity={city} setCity={setcity} setLatLon={setLatLong}/>
            </fieldset>
            <fieldset>
                <legend>
                    <div className="d-flex-betweeen">
                        <h2>Itens de Coleta</h2>
                        <span>Selecione os items recebidos.</span>
                    </div>
                </legend>
                <SelectItems setItems={setItems} />
            </fieldset>
            <button type="submit">
                Cadastrar Ponto de Coleta
            </button>
        </form>
    </div>
  )
}


export default CreatePoint;