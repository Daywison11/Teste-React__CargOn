//importação do axios
import axios from 'axios';


const api = axios.create({
    //base url da api usada
    baseURL : 'https://gorest.co.in/public/v1/'
})

export default api;