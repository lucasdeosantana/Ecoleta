import path from 'path'
export const DEBUG = true
export const PORT = 3333
export const BASE_URL=`http://192.168.3.107:${PORT}`
export const UPLOAD_IMAGE_FOLDER = path.resolve(__dirname, '..', '..', 'static','image', 'upload')
export const UPLOAD_IMAGE_URL_PATH ='/static/image/upload/'
export const DEFAULT_IMAGE_FOLDER = path.resolve(__dirname, '..', '..', 'static','image')
export const DEFAULT_IMAGE_URL_PATH = '/static/image/'
export const STATIC_JS_URL_PATH = '/static/js/'
export const DEFAULT_JS_FOLDER = path.resolve(__dirname, '..', '..', '..', 'Web', 'build', 'static', 'js')
export const STATIC_CSS_URL_PATH = '/static/css/'
export const DEFAULT_CSS_FOLDER = path.resolve(__dirname, '..', '..', '..', 'Web', 'build', 'static', 'CSS')
export const DEFAULT_MEDIA_FOLDER = path.resolve(__dirname, '..', '..', '..', 'Web', 'build', 'static', 'media')
export const STATIC_MEDIA_URL_PATH = '/static/media/'