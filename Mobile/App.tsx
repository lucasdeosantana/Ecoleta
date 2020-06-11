import 'react-native-gesture-handler';
import '@react-native-community/masked-view'
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes'
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";
import { AppLoading } from "expo";
import api from './src/services/api'
import { AsyncStorage, View, Text } from 'react-native';

export default function App() {
  const [fontsLoaded]=useFonts({
      Ubuntu_700Bold,
      Roboto_400Regular,
      Roboto_500Medium
  })
  const [toRoutes, setToRoutes] = useState(false)
  const [urlSelect, setUrlSelect] = useState(false)
  
  useEffect(()=>{
    AsyncStorage.getItem('BASE_URL').then( url =>
      {
        if(url!=null){
          api.defaults.baseURL=url
          api.get('keepalive')
          .then( resp=>{
            setToRoutes(true)
          })
          .catch(resp =>{ 
            setUrlSelect(true)
            setToRoutes(true)
          })
        } else {
          setUrlSelect(true)
          setToRoutes(true)
        }
      })
      .catch( () =>{
        setUrlSelect(true)
        setToRoutes(true)
      })
  },[])

  if(!fontsLoaded || !toRoutes){
    return <AppLoading />
  }
  return ( 
      <>  
        <StatusBar barStyle="dark-content"  backgroundColor="transparent"  translucent/>
        <Routes selectFirstScreen={urlSelect} />
      </>
  );
}