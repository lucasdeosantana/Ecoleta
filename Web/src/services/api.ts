import axios from 'axios'

const api = axios.create({
    baseURL:document.URL
})

export default api