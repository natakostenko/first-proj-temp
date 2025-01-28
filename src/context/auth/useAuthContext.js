import { useContext } from "react"
import { AuthContext } from "./AuthProvider"

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
}