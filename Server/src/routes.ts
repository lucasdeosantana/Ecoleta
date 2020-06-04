import express, { request } from 'express'
import pointControler from './controller/pointsController'
import itemsControler from './controller/itemsController'

const router = express.Router()
const point = new pointControler()
const items =  new itemsControler
router.get('/items', items.index)
router.get('/points/:id', point.show)
router.get('/points', point.index)
router.post('/points', point.create)

export default router