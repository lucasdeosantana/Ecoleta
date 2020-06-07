import multer from 'multer'
import {UPLOAD_IMAGE_FOLDER} from './variables'
import slugify from 'slugify'

export default {
    storage: multer.diskStorage({
        destination:UPLOAD_IMAGE_FOLDER,
        filename(request, file, callback){
            const date = new Date
            const filename = `${date.getTime()}-${slugify(file.originalname)}`
            callback(null, filename)
        }
    })
}