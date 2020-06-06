import { Map } from 'react-leaflet';
import {Request, Response} from 'express'
import knex from '../database/connection'
import { BASE_URL, DEBUG, UPLOAD_IMAGE_URL_PATH } from '../config/variables'

class PointsController{
    async index(request:Request, response:Response){
        DEBUG && console.log(`Receive request in route: ${request.url}, and redirect to PointsController>index`)
        const { items } = request.query;
        const filter = request.query
        delete filter.items
        const parsedItems = String(items).split(",").map(item => Number(item.trim()))
        const points = await knex('points')
        .join('point_items', 'points.id', '=', 'point_items.point_id')
        .whereIn('point_items.item_id', parsedItems)
        .where(filter)
        .distinct()
        .select('points.*') 
        DEBUG && console.log(`Receive request in route: ${request.url}, and response ${points.length} points`)
        response.json(points)
    }
    async create(request:Request, response:Response){
        DEBUG && console.log(`Receive request in route: ${request.url}, and redirect to PointsController>create`)
        const { name, email,  whatsapp, latitude,
            longitude, city,  uf,   items } = request.body
            const trx = await knex.transaction()
            const point_ids = await trx('points').insert({
                name:String(name).toLowerCase(),  
                email:String(email).toLowerCase(),
                whatsapp:String(whatsapp).toLowerCase(),
                latitude:String(latitude).toLowerCase(),
                longitude:String(longitude).toLowerCase(),
                city:String(city).toLowerCase(),
                uf:String(uf).toLowerCase(), 
                image:request.file.filename})
                
                const point_id = point_ids[0]
                const pointItems = items.split(',')
                    .map((item_id:string) =>Number(item_id.trim()))
                    .map((item_id: number)=>{
                    return{
                        item_id,
                        point_id:point_id
                    }
                })
                console.log(pointItems)
                await trx('point_items').insert(pointItems)
                await trx.commit()
                return response.json({success:true, id:point_id})
            }
    async show(request:Request, response:Response){
        DEBUG && console.log(`Receive request in route: ${request.url}, and redirect to PointsController>show`)
        const { id } = request.params
        
        const point = await knex("points").where('id', id ).first()
        
        if(!point){
            return response.status(400).json({message:"Point not found"})
        }
        
        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id).select('items.id').select('items.title')
        const pointWithUrl={...point, imageUrl:`${BASE_URL}${UPLOAD_IMAGE_URL_PATH}${point.image}`}
        return response.json({pointWithUrl, items})
    }
}
        
export default PointsController;