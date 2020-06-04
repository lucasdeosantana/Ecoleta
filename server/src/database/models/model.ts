import knex from '../connection'    
import deepFreeze from '../../utils/deepFreeze'

class Model{
    fields={image:String,
            name:String,
            email:String,
            whatsapp:String,
            city:String,
            uf:String,
            latitude:Float64Array,
            longitude:Float64Array,
            id:Boolean,
            items:[] }
    name=String()
    constructor(initialValues={image:String,
        name:String,
        email:String,
        whatsapp:String,
        city:String,
        uf:String,
        latitude:Float64Array,
        longitude:Float64Array,
        items:[],
    }){
        this.fields = {...this.fields, ...initialValues}
        this.name = String(this.constructor.name)
    }  
    async save(){
        const { name, email,  whatsapp, latitude,
            longitude, city,  uf,   items } = this.fields   
        const trx = await knex.transaction()
        
        if(!this.fields.id){

            const point_ids = await trx('points').insert({
                name:String(name).toLowerCase(),  
                email:String(email).toLowerCase(),
                whatsapp:String(whatsapp).toLowerCase(),
                latitude:String(latitude).toLowerCase(),
                longitude:String(longitude).toLowerCase(),
                city:String(city).toLowerCase(),
                uf:String(uf).toLowerCase(), 
                image:"https://picsum.photos/500/500"})

                this.fields.id = Boolean(point_ids[0])

                const pointItems = items.map((item_id: number)=>{
                    return{
                        item_id,
                        point_id:this.fields.id
                    }
                })

                await trx('point_items').insert(pointItems)
                await trx.commit()
                return(this)
        }else{
                
        }
    }
    static get(filter={}){

    }
    static async all(){
        const allValues = await knex(this.name+"s").select('*')
        const allValuesFreezed = allValues.map(items=>{
            const newPoint = new this(items)
            return deepFreeze(newPoint)
        })
        return allValuesFreezed
    }
    static async filter(filter={}){
        const allValues = await knex('points').select('*').where(filter)
        const allValuesFreezed = allValues.map(items=>{
            const newPoint = new this(items)
            return deepFreeze(newPoint)
        })
        return allValuesFreezed
    }
}

export default Point