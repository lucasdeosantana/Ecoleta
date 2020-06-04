import React from 'react';
import { StatusBar,  View } from 'react-native';
import Routes from './src/routes'
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";
import { AppLoading } from "expo";


    
export default function App() {
  
  const [fontsLoaded]=useFonts({
      Ubuntu_700Bold,
      Roboto_400Regular,
      Roboto_500Medium
  })
  if(!fontsLoaded){
      return <AppLoading />
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent"  translucent/>
      <Routes />
    </>
  );
}
