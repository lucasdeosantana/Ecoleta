import React, {useEffect,  useState} from 'react';
import api  from '../../services/api'
import {RouteChildrenProps} from 'react-router-dom'
import Header from '../../components/Header'
import Card from '../../components/Card'
import { filterPointsI, itemsInterface } from '../../interfaces/backendInterfaces';
import './styles.css'




const FindPoint: React.FC<RouteChildrenProps> = (props) => {
  const [points, setPoints] = useState<filterPointsI[]>([])
  const [items, setItems] = useState<itemsInterface[]>([])
  const params = new URLSearchParams(props.location.search)
  const city = {uf:params.get('uf'), city:params.get('city')}

  useEffect(() => {
    api.get<filterPointsI[]>('points', { params:{
      items:[1,2,3,4,5,6],
      uf:city.uf,
      city:city.city}}).then(response=>{
        const pointResponse = response.data.map(point=>point)
        setPoints(pointResponse)
      })
      api.get<itemsInterface[]>('items').then(response=>{
        const itemsResponse = response.data.map(resp=>resp)
        setItems(itemsResponse)
      })
  }, [])


  return(
      <div id="page-find-point">
        <Header />
        <div className="white-background" />
        <div className="points-card">
        {points.map(point=>(<Card point={point} items={items} />))}
        {points.map(point=>(<Card point={point} items={items} />))}
        {points.map(point=>(<Card point={point} items={items} />))}
        {points.map(point=>(<Card point={point} items={items} />))}
        {points.map(point=>(<Card point={point} items={items} />))}
        {points.map(point=>(<Card point={point} items={items} />))}
        </div>
      </div>
  )
}

export default FindPoint;