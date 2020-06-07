import React, { useState, useEffect } from 'react';
import { View, Picker } from 'react-native';
import styles from './styles'
import api from '../../services/api'
import { ufResponseI, citiesResponseI } from '../../interfaces/backendInterfaces'

interface propsI{
    citySelected:citiesResponseI
    setCitySelected:(value:citiesResponseI)=>void
}


const PickerUfCity: React.FC<propsI> = ({citySelected, setCitySelected}) => {
    const [ufSelected, setUfSelected] = useState("0")
    const [ufsList, setUfsList] = useState<ufResponseI[]>([])
    const [citiesName, setCitiesName] = useState<citiesResponseI[]>([])

    useEffect(() => {
        if(ufSelected==="0"){
            return;
        }
        api.get<citiesResponseI[]>(`cities/${ufSelected}`)
        .then(response =>{
            const citiesResponse =  response.data
            setCitiesName(citiesResponse)
    })}, [ufSelected])

    useEffect(()=>{
        api.get<ufResponseI[]>('uf')
            .then(response =>{
                const ufInitials = response.data
                setUfsList(ufInitials)}
            )
    },[])

    return(
        <>
            <View style={styles.container}>
                <Picker selectedValue={ufSelected}
                    onValueChange={(itemValue, itemIndex) => setUfSelected(itemValue)}
                    mode="dropdown"
                style={{color:"#363636"}}
                >
                    <Picker.Item label="Selecione o Estado" value="0" />
                    {ufsList.map(uf=>(<Picker.Item key={String(uf.codigo_uf)} label={uf.name} value={uf.uf} />))}
                </Picker>
            </View>
            <View style={styles.container}>
                <Picker selectedValue={citySelected}
                    onValueChange={(itemValue:citiesResponseI, itemIndex)=>{setCitySelected(itemValue)}}
                    mode="dropdown"
                    style={{color:"#363636"}}
                >
                    <Picker.Item label="Selecione a Cidade" value="0" />
                    {citiesName.map(city=>(<Picker.Item key={String(city.codigo_ibge)} label={city.name} value={city} />))}
                </Picker>
            </View>
        </>
    )
}

export default PickerUfCity;