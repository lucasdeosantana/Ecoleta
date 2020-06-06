
import {Request, Response} from 'express'
import knex from '../database/connection'
import { BASE_URL, DEFAULT_IMAGE_URL_PATH, DEBUG } from '../config/variables'
class itemsController{
    async index(request:Request, response:Response){
        DEBUG && console.log(`Receive request in route: ${request.url}, and redirect to itemsController>index`)
        const items = await knex('items').select('*')
        const itemsFormated = items.map(item=>{
                        return{
                            id: item.id,
                            title:  item.title,
                            image: item.image,
                            image_url:`${BASE_URL}${DEFAULT_IMAGE_URL_PATH}${item.image}`
                        }
                    })
        return response.json(itemsFormated)
    }
}
export default itemsController