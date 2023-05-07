import React, { createContext, useState } from "react";

interface ChildrenProps {
    children: React.ReactNode;
}

export interface UserDataProps {
    email: string;
}

export type AuthType = {
    userData: UserDataProps,
    setUserData: (data: UserDataProps) => void
}

export const AuthContext = createContext<AuthType | null>(null);

export const AuthContextProvider : React.FC<ChildrenProps> = ({children}) => {
    const [ userData, setUserData ] = useState(() => {
        const email = localStorage.getItem('@Project:email');

        if (email) {
            return {
                email: JSON.parse(email)
            };
        } else {
            return {
                email: ""
            };
        }
    });

    return (
        <AuthContext.Provider value={{userData, setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}