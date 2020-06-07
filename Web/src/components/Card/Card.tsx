import React from 'react';
import { filterPointsI, itemsInterface } from '../../interfaces/backendInterfaces'
import './styles.css';
import { Handler } from 'leaflet';

interface propsCardI{
    point:filterPointsI
    items:itemsInterface[]
}

const Card: React.FC<propsCardI> = ({ point, items }) => {
    console.log(point)
    function handleClickCard(){
        window.open(`https://maps.google.com/?q=${point.latitude},${point.longitude}`)
    }
  return(
    <div className="card" onClick={handleClickCard}>
        <img src={point.imageUrl}/>
        <div className="card-body">
            <h2>{point.name}</h2>
            <p>{point.city}/{point.uf}</p>
        </div>
        <h3>Items coletados</h3>
        <div className="card-item">
            {point.items.map(itemID => (
                items.map(item=> item.id===itemID && (<div className="tooltip">
                <img src={item.image_url} alt={item.title}/>
                <span className="tooltiptext">{item.title}</span>
            </div>))
            ))}
        </div>
    </div>
  )
}

export default Card;