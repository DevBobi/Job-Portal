import { useState } from 'react';
import Axios from '../Utils/axios';

const useJob = () => {
    const [job, setJob] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const [success, setSuccess] = useState(false);

    const getJob = async () => {
        setLoading(true);
        try {
            const result = Axios.get('/job_post/');
            setJob(result.data);
        } catch (e) {
            setError(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    const postJob = async (data) => {
        setLoading(true);
        setSuccess(false);
        try {
            const result = await Axios.post('/job_post/', data);
            console.log(result.data);
            setSuccess('success');
        } catch (e) {
            setError(error?.response?.data);
        } finally {
            setLoading(false);
        }
    };

    const updateJob = async (id) => {
        setSuccess(false);
        setLoading(true);
        try {
            const result = await Axios.put(`/${id}/`, {});
            console.log(result.data);
            setSuccess(true);
        } catch (e) {
            setError(error?.response?.data);
        } finally {
            setLoading(false);
        }
    };

    const deleteJob = async (id) => {
        setSuccess(false);
        setLoading(true);
        try {
            const result = await Axios.delete(`/${id}/`);
            setSuccess(true);
        } catch (e) {
            setError(error?.response?.data);
        } finally {
            setLoading(false);
        }
    };

    const clearSuccess = () => setSuccess(false);

    return {
        job,
        loading,
        error,
        success,
        getJob,
        postJob,
        updateJob,
        deleteJob,
        clearSuccess,
    };
};

export default useJob;
