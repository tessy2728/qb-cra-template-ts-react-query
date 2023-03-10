

import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { IUser } from "../core/interfaces/user";

interface UserInterface {
    user?: IUser | null;
    isLoggedIn: boolean;
    setUserProfile?: (userDetails: any) => void;
    logout?: () => void;
}

const AuthContext = createContext<UserInterface>({ isLoggedIn: false });


type Props = {
    children: ReactNode;
};
export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const setUserProfile = async (userDetails: any) => {
        setUser(userDetails);
        setIsLoggedIn(!!userDetails.id)
    };

    const logout = () => {
        setUser(null);
    };
    const value = {
        user,
        isLoggedIn,
        setUserProfile,
        logout,
    }
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

export default AuthProvider;