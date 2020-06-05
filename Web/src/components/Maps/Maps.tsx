import { Map, Marker, TileLayer } from "react-leaflet";
import React, { useEffect, useState, useContext }  from 'react';
import { LeafletMouseEvent } from "leaflet";
import contextCreatePoint from '../../pages/CreatePoint/context'

const Maps: React.FC = () => {
  const context = useContext(contextCreatePoint)

  const [initialPosition, setInitialPosition] = useState<[number, number]>([-11.3206707,-51.0105178])
  const [positionSelected, setpositionSelected] = useState<[number, number]>([0,0])

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(position=>{
        const { latitude, longitude} = position.coords        
        setInitialPosition([latitude, longitude])
    })
  },[])

  function handleSelectPosition(event:LeafletMouseEvent){
    const latitude  = event.latlng.lat
    const longitude = event.latlng.lng
    setpositionSelected([
        latitude,
        longitude
    ])
    context.latitude = latitude
    context.longitude = longitude
}
  return (
    <Map center={initialPosition} zoom={15} onclick={handleSelectPosition}>
        <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

        <Marker position={positionSelected} />
    </Map>
  )
}

export default Maps;