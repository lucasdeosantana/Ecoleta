import express, { request } from 'express'
import pointControler from './controller/pointsController'
import itemsControler from './controller/itemsController'
import multerConfig from './config/multer'
import multer from 'multer'


const router = express.Router()
const point = new pointControler()
const items =  new itemsControler()
const upload = multer(multerConfig) 

router.get('/items', items.index)
router.get('/points/:id', point.show)
router.get('/points', point.index)
router.post('/points', upload.single('image') ,point.create)

export default router