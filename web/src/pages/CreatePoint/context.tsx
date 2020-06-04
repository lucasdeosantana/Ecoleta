import { createContext } from 'react';
interface CreatePointsFields{
    name:string
    email:string
    whatsapp:string
    uf:string
    city:string
    latitude:number
    longitude:number
    items:number[]
}
const contextCreatePoint = createContext<CreatePointsFields>({
    name:"",
    email:"",
    whatsapp:"",
    uf:"",
    city:"",
    latitude:0,
    longitude:0,
    items:[]
})
export default contextCreatePoint