import axios from 'axios'




const _api = axios.create({
    baseURL: "http://localhost:5005/api",
    timeout:10000
})
//interceptor si...


_api.interceptors.request.use((config)=>{

    const storedToken = localStorage.getItem("authToken")

    if(storedToken){
        config.headers = {
            Authorization: `Bearer ${storedToken}`
        }
    }
    return config
})
export default _api;