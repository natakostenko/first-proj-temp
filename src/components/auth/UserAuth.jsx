import { AuthContext } from "../../context/auth/AuthProvider";
import { useAuthContext } from "../../context/auth/useAuthContext";

const UserAuth = () => {
    const { stateData } = useAuthContext();
    const { user, setUser } = stateData;

    const textBtn = user ? 'Logout' : 'Login';

    return (
        <button 
            className="auth-btn"
            onClick={() => setUser(prev => !prev)}
        >
            {textBtn}
        </button>
    )
}

export default UserAuth;