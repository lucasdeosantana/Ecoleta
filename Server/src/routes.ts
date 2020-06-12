import express, { request } from 'express'
import pointControler from './controller/pointsController'
import itemsControler from './controller/itemsController'
import LocalizationControler from './controller/ufsController'
import multerConfig from './config/multer'
import multer from 'multer'


const router = express.Router()
const point = new pointControler()
const items =  new itemsControler()
const ufs = new LocalizationControler()
const upload = multer(multerConfig) 
import path from 'path'
router.get('/keepalive',(request, response)=>{
    console.log('keepAlive')
    response.send(true)})
router.get('/', (request, response)=>{
    response.sendFile(path.resolve(__dirname, '..', '..', 'Web', 'build', 'index.html'))
})
router.get('/items', items.index)
router.get('/uf/', ufs.ufsIndex)
router.get('/cities/:uf', ufs.citiesIndex)
router.get('/uf/:uf/city/:city', ufs.cityShow)
router.get('/points/:id', point.show)
router.get('/points', point.index)
router.post('/points', upload.single('image') ,point.create)

export default router