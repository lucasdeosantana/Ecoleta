import React from 'react'

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
}

export interface propsDimmingScreenFindCityI{
    setOpenDimming:(value:boolean)=>void
}
export interface ufCityI{
    uf:string
    city:string
}