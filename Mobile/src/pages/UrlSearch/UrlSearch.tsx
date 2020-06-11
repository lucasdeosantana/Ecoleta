import 'react-native-gesture-handler';
import '@react-native-community/masked-view'
import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Image, Text, TextInput, TextInputChangeEventData,  NativeSyntheticEvent } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'
import { AsyncStorage } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
const UrlSearch: React.FC = () => {

    const navigation = useNavigation()
    const [URL, setURL] = useState("")
    function handleInput(event:NativeSyntheticEvent<TextInputChangeEventData>){
        setURL(event.nativeEvent.text)
    }
    function handleButton(){
        if(URL!=null){
            api.defaults.baseURL=URL
            api.get('keepalive')
            .then( resp=>{
                if(resp){
                    AsyncStorage.setItem('BASE_URL', URL).then(()=>{
                    navigation.navigate('Home')
                    })
                }
            })
            .catch(resp =>console.log("URL Wrong"))
        }
    }
  return(
    <ImageBackground source={require('../../assets/home-background.png')} style={styles.container}
            imageStyle={{width: 247, height: 368}}>
        <View style={styles.main}>
            <Image source={require('../../assets/logo.png')} />
            <Text style={styles.title}>Não foi possível se conectar ao servidor! Por favor informe a url do seu servidor!</Text>
            <TextInput style={styles.input} value={URL} placeholder="http://url.com" onChange={handleInput}/>
            <RectButton style={styles.button} onPress={handleButton}><Text style={styles.textButton}>Confirmar</Text></RectButton>
        </View>
    </ImageBackground>

  )
}

export default UrlSearch;