import path from 'path'

export const DEBUG = true
export const PORT = 3333
export const BASE_URL=`http://192.168.3.106:${PORT}`
export const UPLOAD_IMAGE_FOLDER = path.resolve(__dirname, '..', '..', 'static','image', 'upload')
export const UPLOAD_IMAGE_URL_PATH ='/static/image/upload/'
export const DEFAULT_IMAGE_FOLDER = path.resolve(__dirname, '..', '..', 'static','image')
export const DEFAULT_IMAGE_URL_PATH = '/static/image/'