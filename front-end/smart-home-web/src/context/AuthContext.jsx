import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

    const login = (email, password) => {
        console.log("Login:", email, password);
        setUser({ email });
        setIsAuthenticated(true);
    };

    const logout = () => { setUser(null);
        setIsAuthenticated(false);
    };
        return (
            <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
                {children}
            </AuthContext.Provider>
        );
};