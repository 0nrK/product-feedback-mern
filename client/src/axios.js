import axios from "axios"


let token

let user = JSON.parse(localStorage.getItem("user"))

if (user) {
    token = user.token
}

axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    return request
}, error => {
    return Promise.reject(error)
})

axios.interceptors.request.use(response => {
    return response
}, error => {
    console.log(error.response);

    return Promise.reject(error)
})

