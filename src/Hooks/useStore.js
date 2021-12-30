import { useState, useEffect } from 'react';
import Axios from '../Utils/axios';

const useStore = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const login = async (info) => {
        setError('');
        setLoading(true);
        try {
            const { data } = await Axios.post('/login/', info);
            setUser(data);
            localStorage.setItem('auth', JSON.stringify(data));
        } catch (error) {
            parseInt(error?.response?.status) === 401 ?
                setError('Unauthorized user, Please try again!') : setError('Something went wrong!')
        } finally {
            setLoading(false);
        }
    };

    const signup = async (data) => {
        setError('');
        setLoading(true);
        logOut();
        try {
            const result = await Axios.post('/register/', data);
        } catch (error) {
            const first = Object.keys(error.response?.data)[0];
            setError(error?.response?.data[first][0]);
        } finally {
            setLoading(false);
        }
    };

    const logOut = () => {
        setError('');
        setUser(null);
        localStorage.removeItem('auth');
    };

    const isLoggedIn = () => {
        const auth = localStorage.getItem('auth') || null
        auth && setUser(JSON.parse(auth))
    }

    return { loading, error, user, login, signup, logOut, isLoggedIn };
};

export default useStore;
