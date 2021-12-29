
import React from 'react';
import { createContext } from 'react';
import useStore from '../Hooks/useStore';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContexts = useStore();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;