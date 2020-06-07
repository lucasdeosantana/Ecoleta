import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import styles from './styles';
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, {Marker} from "react-native-maps";
import { SvgUri } from "react-native-svg";
import api from '../../services/api'
import * as Location from "expo-location"
import { itemsInterface, pointsInterface, citiesResponseI } from '../../interfaces/backendInterfaces'

interface paramsI{
  citySelected:citiesResponseI
}

const Points: React.FC = () => {
  
  const [items, setItems] = useState<itemsInterface[]>([])
  const [itemsSelected, setitemsSelected] = useState<number[]>([])
  const [initialPosition, setInitialPosition] = useState<[number, number]>([-23.5475000, -46.6361100])
  const [pointsList, setPointsList] = useState<pointsInterface[]>([])
  const navigation = useNavigation();
  const route = useRoute()
  const params = route.params as paramsI

  useEffect(() => {
    api.get('/items').then(response =>{
       setItems(response.data)
    })
  }, [])

  useEffect(() => {
    api.get('points',{
      params:{
        items:itemsSelected }
    }).then(response=>{
      setPointsList(response.data)
    })
  }, [itemsSelected])

  useEffect(()=>{
    async function loadPosition(){
      const { status } = await Location.requestPermissionsAsync();

      if(status!== 'granted'){
        Alert.alert("Sem sua permissão na Localização, não é possivel mostrar pontos proximos!")
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const {latitude, longitude} = location.coords
      setInitialPosition([latitude, longitude])
    }
    setInitialPosition([params.citySelected.latitude, params.citySelected.longitude])
    loadPosition()
  },[])

  function handleNavigationBack(){
      navigation.goBack()
  }
  function handleNavigationToDetail(id:number){
    navigation.navigate("Details", {point_id:id})
  }
  function handleSelectItem(id:number){
    const allreadySelectedItem = itemsSelected.findIndex(item=> item === id)
    if(allreadySelectedItem >= 0 ){
        const filteredItems = itemsSelected.filter(item=>item!==id)
        setitemsSelected(filteredItems)
    }else{
        setitemsSelected([...itemsSelected, id])
    }
  }

  return(
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigationBack}>
          <Icon name="arrow-left" size={20} color="#34cb79" />
        </TouchableOpacity>
        <Text style={styles.title}>Bem Vindo.</Text>
        <Text style={styles.description}>Encontre no Mapa um ponto de coleta.</Text>
        <View style={styles.mapContainer}>
          <MapView style={styles.map} 
          loadingEnabled={initialPosition[0]===-23.5475000}
          initialRegion={{
            latitude:initialPosition[0],
            longitude: initialPosition[1],
            latitudeDelta: 0.014,
            longitudeDelta: 0.014,
          }}>
            {pointsList.map(point => (
              <Marker key={String(point.id)} style={styles.mapMarker} coordinate={
                {
                  latitude:point.latitude,
                  longitude:point.longitude,
                }}
                onPress={()=>handleNavigationToDetail(point.id)}>
                  <View style={styles.mapMarkerContainer}>
                    <Image style={styles.mapMarkerImage} source={{uri:point.imageUrl}}/>
                    <Text style={styles.mapMarkerTitle}>{point.name}</Text>
                  </View>
                </Marker>
            ))}
          </MapView>
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{
          paddingHorizontal: 20
        }}>
        {items.map(item =>(
          <TouchableOpacity key={String(item.id)}
           style={[
             styles.item,
              itemsSelected.includes(item.id)?styles.selectedItem:{}]}
           onPress={()=>handleSelectItem(item.id)} activeOpacity={0.5}>
          <SvgUri width={42} height={42} uri={item.image_url}/>
          <Text style={styles.itemTitle}>{item.title}</Text>
          </TouchableOpacity>))}
        </ScrollView>
      </View>
    </>
  )
}

export default Points;