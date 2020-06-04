import {Request, Response} from 'express'
import knex from '../database/connection'

class itemsController{
    async index(request:Request, response:Response){
        const items = await knex('items').select('*')
        const itemsFormated = items.map(item=>{
                        return{
                            id: item.id,
                            title:  item.title,
                            image_url: `http://localhost:3333/static/image/${item.image}`
                        }
                    })
        return response.json(itemsFormated)
    }
}
export default itemsController