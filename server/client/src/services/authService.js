import axios from "axios"

const baseURL = "/auth"

const register = async ({ username, password }) => {
    try {
        const res = await axios.post(baseURL + "/register", { username, password })
        if (res.data.token) localStorage.setItem("user", JSON.stringify(res.data))
        return res
    } catch (err) {
        return err
    }
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