import express from 'express'
import cors from 'cors'
import router from './routes'
import {UPLOAD_IMAGE_FOLDER, DEFAULT_IMAGE_FOLDER, PORT, DEBUG , UPLOAD_IMAGE_URL_PATH, DEFAULT_IMAGE_URL_PATH} from './config/variables'


var app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use(UPLOAD_IMAGE_URL_PATH, express.static(UPLOAD_IMAGE_FOLDER))
app.use(DEFAULT_IMAGE_URL_PATH, express.static(DEFAULT_IMAGE_FOLDER))
DEBUG && console.log(`Server Started Listening in Port: ${PORT}`)
app.listen(PORT)



