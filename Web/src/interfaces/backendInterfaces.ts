export interface ufResponseI{
    codigo_uf:string
    uf: string
    name: string
    latitude: number
    longitude: number
    
}
export interface citiesResponseI{
    codigo_ibge:number
    name:string
    capital:boolean
    latitude:number
    longitude:number
    codigo_uf:number
}
export interface itemsInterface{
    id:number
    title:string
    image_url:string
}
  
export interface pointsInterface{
    id:number
    name:string
    image:string
    latitude:number
    longitude:number
}
export interface filterPointsI {
        id:number
        image:string
        name:string
        email:string
        whatsapp:string
        city:string
        uf:string
        latitude:number
        longitude:number
        imageUrl:string
        items:number[]
}