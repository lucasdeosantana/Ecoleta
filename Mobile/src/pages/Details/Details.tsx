import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text, SafeAreaView, Linking } from 'react-native';
import styles from './styles'
import { Feather as Icon, FontAwesome as Fas } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import api from '../../services/api'
import * as MailComposer from 'expo-mail-composer'

interface paramsInterface{
  point_id:string
}

interface dataInterface{
  point:{  
    id:number
    name:string
    email:string
    image:string
    whatsapp:string
    city: string
    uf: string
    latitude: number
    longitude: number
  },
  items:[{
    id:number
    title:string
  }]
}

function Details(){
  const [data, setData] = useState<dataInterface>({} as dataInterface)
  const navigation = useNavigation();
  const route = useRoute()
  const params = route.params as paramsInterface
  useEffect(() => {
   api.get(`points/${params.point_id}`).then(response =>{  
    setData(response.data)
   })
  }, [])

  if(!data.point){
    return null;
  }
  function handleNavigationBack(){
      navigation.goBack()
  }
  function handleMailComposer(){
    MailComposer.composeAsync({
      subject:"Olá te achei pelo Ecoleta, pode tirar umas duvidas?",
      recipients:[data.point.email]
    })
  }
  function handleWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=${data.point.whatsapp}&text=Olá te achei pelo Ecoleta, pode tirar umas duvidas?`)
  }

  return( 
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
          <TouchableOpacity onPress={handleNavigationBack}>
            <Icon name="arrow-left" size={20} color="#34cb79" />
          </TouchableOpacity>
          <Image style={styles.pointImage} source={{uri:data.point.image}} />
          <Text style={styles.pointName}>{data.point.name.charAt(0).toUpperCase() + data.point.name.slice(1)}</Text>
          <Text style={styles.pointItems}>{data.items.map(itemstoPoint=>itemstoPoint.title).join(', ')}</Text>
          <View style={styles.address}>
            <Text style={styles.addressTitle}>Endereço</Text>
          <Text style={styles.addressContent}>{data.point.city.charAt(0).toUpperCase() + data.point.city.slice(1)}/{data.point.uf.toUpperCase()}</Text>
          </View>
      </View>
       <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleWhatsapp}>
          <Fas name="whatsapp" size={20} color="#fff"/>
          <Text style={styles.buttonText}>Whatsapp</Text>
        </RectButton>

        <RectButton style={styles.button} onPress={handleMailComposer}>
          <Icon name="mail" size={20} color="#fff"/>
          <Text style={styles.buttonText}>Email</Text>
        </RectButton>
       </View>
    </SafeAreaView>
  )

}

export default Details;