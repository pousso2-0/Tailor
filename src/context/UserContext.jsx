import React, { createContext, useState, useEffect, useContext } from 'react';
import { userService } from '../services/userService';
import { useAuth } from './AuthContext';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { isAuthenticated, setIsAuthenticated } = useAuth();

    useEffect(() => {
        const fetchUser = async () => {
            if (!isAuthenticated) {
                setLoading(false);
                return;
            }

            try {
                const user = await userService.getCurrentUser();
                setCurrentUser(user.data);
                console.log(user);
            } catch (error) {
                console.error('Error fetching current user:', error);
                setCurrentUser(null);
                setIsAuthenticated(false);

            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [isAuthenticated]);
    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
