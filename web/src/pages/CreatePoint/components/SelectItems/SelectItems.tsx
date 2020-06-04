import React, { useState, useContext, useEffect } from 'react';
import contextCreatePoint from "../../context";
import api from '../../../../services/api'

interface Item{
    id:number,
    title:string,
    image_url:string
}

const SelectItems: React.FC = () => {
    const context = useContext(contextCreatePoint)

    const [items, setitems] = useState<Item[]>([])
    const [itemsSelected, setitemsSelected] = useState<number[]>([])

    useEffect(()=>{
        api.get('items').then( response=>{
            setitems(response.data)})},[])

    function handleSelectItem(id:number){
        const allreadySelectedItem = itemsSelected.findIndex(item=> item === id)
        if(allreadySelectedItem >= 0 ){
            const filteredItems = itemsSelected.filter(item=>item!==id)
            context.items=filteredItems
            setitemsSelected(filteredItems)
        }else{
            setitemsSelected([...itemsSelected, id])
            context.items=[...itemsSelected, id]
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