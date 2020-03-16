'use strict'

import axios from 'axios'

// 请求发送数据拦截
axios.interceptors.request.use(config => {
    console.log('interceptors');
    return config
},error => {
    return Promise.reject(error)
})

// 请求发送结果拦截
axios.interceptors.response.use(response => {
    return response
},error => {
    return Promise.resolve(error.response)
})

// 检查状态
function checkStatus(response) {
    if(response &&(response.status === 200 || response.status === 304 || response.status === 400)) {
        return response
    }
    return {
        status:-404,
        msg:"网络异常"
    }
}

function checkCode(res) {
    if(res.status === -404) {
        alert(res.msg)
    }
    if(res.data && (!res.data.success)) {
        alert(res.data.error_msg)
    }
    return res
}


export default {
    post(url,data) {
        return axios({
            methods:'post',
            baseURL:'',
            url,
            data:data,
            timeout:10000,
            headers:{
                'X-Requested-With':'XMLHttpRequest',
                'Connect-Type':'application/x-www-form-urlencode;charset=UTF-8'
            }
        }).then(
            (response) => {
                return checkStatus(response)
            }
        ).then((res) => {
            return checkCode(res)
        })
    },
    get(url,params) {
        return axios({
            method:'get',
            baseURL:'',
            url,
            params,
            timeout:10000,
            headers:{
                'X-Requested-with':'XMLHttpRequest'
            }
        }).then((response) => {
            return checkStatus(response)
        }).then((res) => {
            return checkCode(res)
        })
    }
}