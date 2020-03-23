import axios from 'axios'
 
 axios.interceptors.request.use((config) => {
     if(config.method === 'post') {
         config.data = JSON.stringify(config.data)
     }
     return config
 })
 
 axios.interceptors.response.use((res) => {
     if(!res.data.success) {
         return Promise.reject(res)
     }
     return res;
 })
 
 export function fetchPost(url, params) {
     return new Promise((resolve,reject) => {
         axios.post(url,params)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
     })
 }
 
 export function fetchGet(url, params) {
     return new Promise((resolve,reject) => {
         axios.get(url,{
                params:params
            }).then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
     })
 }
 
 export default {
    userInfo(id) {
        return fetchGet(`api/userInfo/${id}`)
    }
 }