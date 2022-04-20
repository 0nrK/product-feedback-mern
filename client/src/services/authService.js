import axios from "axios"

const baseURL = "http://localhost:5000/auth"

const register = async ({ username, password }) => {
    return await axios.post(baseURL + "/register", {
        username, password
    })
}

const login = async ({ username, password }) => {
    try {
        const res = await axios.post(baseURL + "/login", { username, password })
        if (res.data.token) localStorage.setItem("user", JSON.stringify(res.data))
        return res
    } catch (err) {
        return err
    }
}

const logout = async () => {
    localStorage.removeItem('user')
}

const authService = { register, login, logout }

export default authService