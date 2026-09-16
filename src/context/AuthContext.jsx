import { createContext, useContext, useEffect, useState } from "react";
import { authToken, signIn } from "../utils/signInAuth";
import { removeToken } from "../utils/token";

const AuthContext = createContext()

export function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function restoreSession() {
            try {
                const data = authToken()
                setUser(data.data)
            } catch (error) {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        restoreSession()
    }, [])

    async function login(email, password) {
        setLoading(true)
        try {
            await signIn(email, password)
            const data = await authToken()
            setUser(data.data)
        } catch (error) {
            setUser(null)
            return error
        } finally {
            setLoading(false)
        }
    }

    function logout() {
        setUser(null)
        removeToken()
    }

    const value = {user, loading, login, logout}
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth er ikke brugt i en provider")
    }
    return context
}