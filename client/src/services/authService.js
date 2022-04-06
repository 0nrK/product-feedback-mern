import axios from "axios"

const baseURL = "http://localhost:5000/auth"

const register = async ({ username, password }) => {
    return await axios.post(baseURL + "/register", {
        username, password
    })
}

const login = async ({ username, password }) => {
    return await axios.post(baseURL + "/login", {
        username, password
    })
        .then((res) => {
            if (res.data.token)
                localStorage.setItem("user", JSON.stringify(res.data))
        })
        .catch((err) => console.log(err))
}

const logout = async () => {
    localStorage.removeItem('user')
}

const authService = { register, login, logout }

export default authService