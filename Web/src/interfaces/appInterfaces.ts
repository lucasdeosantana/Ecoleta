import React from 'react'

export interface propsSelectItemsI{
    setItems:(value:number[])=>void
}
export interface propsDropZoneI{
    setFile:(value:File)=>void
}
export interface stateContextI{
    selectedCity:string
    setSelectedCity:(value:string)=>void
}

export interface prospsUfCityI{
    ufCity:ufCityI
    setCity:(value:ufCityI)=>void
}
export interface prospsMapsI{
    ufCity:ufCityI
    setCity:(value:ufCityI)=>void
    setLatLon?:(value:[number , number])=>void
}

export interface propsDimmingScreenFindCityI{
    setOpenDimming:(value:boolean)=>void
}
export interface ufCityI{
    uf:string
    city:string
}
export interface contactDataI{
    name:string
    email:string
    whatsapp:string
}
export interface contactDataStateI{
    data:contactDataI
    setData:(value:contactDataI)=>void
}