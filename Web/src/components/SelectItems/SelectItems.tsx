import React, { useState, useContext, useEffect } from 'react';
import api from '../../services/api'
import { itemsInterface } from "../../interfaces/backendInterfaces";
import { propsSelectItemsI } from "../../interfaces/appInterfaces";
const SelectItems: React.FC<propsSelectItemsI> = ({ setItems }) => {

    const [items, setitems] = useState<itemsInterface[]>([])
    const [itemsSelected, setitemsSelected] = useState<number[]>([])

    useEffect(()=>{
        api.get('items').then( response=>{
            setitems(response.data)})},[])

    function handleSelectItem(id:number){
        const allreadySelectedItem = itemsSelected.findIndex(item=> item === id)
        if(allreadySelectedItem >= 0 ){
            const filteredItems = itemsSelected.filter(item=>item!==id)
            setitemsSelected(filteredItems)
            setItems(filteredItems)
        }else{
            setitemsSelected([...itemsSelected, id])
            setItems([...itemsSelected, id])
        }
    }

  return(
    <ul className="items-grid">
    {items.map(item => (
        <li key={item.id} onClick={() => handleSelectItem(item.id)}
        className={itemsSelected.includes(item.id)? 'selected':""}>
            <img src={item.image_url} alt={item.title}/>
            <span>{item.title}</span>
        </li>)
    )}
</ul>
  )
}

export default SelectItems;