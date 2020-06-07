import {Request, Response} from 'express'
import knex from '../database/connection'
import { DEBUG } from '../config/variables'

class LocalizationControler{
    async ufsIndex(request:Request, response:Response){
        DEBUG && console.log(`Receive request in route: ${request.url}, and redirect to ufsControler>ufsIndex`)
        const UFS = await knex('BrazilUfs').select('*')
        response.json(UFS)
    }
    async citiesIndex(request:Request, response:Response){
        DEBUG && console.log(`Receive request in route: ${request.url}, and redirect to ufsControler>citiesIndex`)
        const { uf } = request.params
        const uf_code = await knex('BrazilUfs').select('codigo_uf').where({uf:uf.toUpperCase()}).first()
        const cities = await knex('BrazilCities')
        .select('*').where(uf_code)
        response.json(cities)
    }
    async cityShow(request:Request, response:Response){
        DEBUG && console.log(`Receive request in route: ${request.url}, and redirect to ufsControler>citiesIndex`)
        const { city, uf } = request.params
        const uf_code = await knex('BrazilUfs').select('codigo_uf').where({uf:uf.toUpperCase()}).first()
        console.log(uf_code)
        const selectedCity = await knex('BrazilCities').select('*').where({name:city, ...uf_code}).first()
        response.json(selectedCity)
    }
}

export default LocalizationControler