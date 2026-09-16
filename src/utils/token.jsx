const tokenKey = "authToken"

export function getToken() {
    try {
        return localStorage.getItem(tokenKey)
    } catch (error) {
        return null
    }
}

export function setToken(token) {
    try {
        localStorage.setItem(tokenKey, token)
    } catch (error) {
        throw new Error("Kunne ikke logge ind, prøv igen", error)
    }
}

export function removeToken() {
    localStorage.removeItem(tokenKey)
}