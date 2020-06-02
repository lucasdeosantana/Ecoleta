import {Request, Response} from 'express'
import knex from '../database/connection'

class PointsController{
    async index(request:Request, response:Response){
        const { city, uf, items } = request.query;
        const parsedItems = String(items).split(",").map(item => Number(item.trim()))
        
        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*') 

        response.json(points)
    }
    async create(request:Request, response:Response){
            const { name, email,  whatsapp, latitude,
                logitude, city,  uf,   items } = request.body
        
            const trx = await knex.transaction()
        
            const point_ids = await trx('points').insert({
                name,  email,  whatsapp,   latitude,
                logitude, city, uf, 
                image:"https://picsum.photos/500/500"})
        
            const point_id = point_ids[0]
            const pointItems = items.map((item_id: number)=>{
                return{
                    item_id,
                    point_id:point_id
                }
            })
            
            await trx('point_items').insert(pointItems)
            await trx.commit()
            return response.json({success:true, id:point_id})
    }
    async show(request:Request, response:Response){
        const { id } = request.params
        
        const point = await knex("points").where('id', id ).first()
        
        if(!point){
            return response.status(400).json({message:"Point not found"})
        }

        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', id).select('items.id').select('items.title')
        return response.json({point, items})
    }
}

export default PointsController;