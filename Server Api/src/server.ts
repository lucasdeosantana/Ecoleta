import express, { Router } from 'express'
import cors from 'cors'
import router from './routes'
import path from 'path'
var app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.use('/static/image/', express.static(path.resolve(__dirname, '..',  'static', 'image')))

app.listen(3333)