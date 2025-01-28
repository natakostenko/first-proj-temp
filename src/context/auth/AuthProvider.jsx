import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
    const {children} = props;
    const [user, setUser] = useState(false);

    const contextData = {
        stateData: {user, setUser}
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;