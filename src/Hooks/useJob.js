import { useEffect, useState } from 'react';
import Axios from '../Utils/axios';

const useJob = () => {
    const [job, setJob] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setLoading(true)
        Axios.get('/job_post/')
            .then(({ data }) => setJob(data))
            .catch(err => setError(error?.response?.data))
            .finally(() => setLoading(false))
    }, [])

    const postJob = async (data) => {
        setLoading(true);
        setSuccess(false);
        try {
            const result = await Axios.post('/job_post/', data);
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
            const result = await Axios.put(`/job_update/${id}/`, { id });
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
            const result = await Axios.delete(`/job_update/${id}/`);
            setSuccess(true);
            const filteredData = job.filter((item) => item.id !== id)
            setJob(filteredData);

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
        postJob,
        updateJob,
        deleteJob,
        clearSuccess,
    };
};

export default useJob;
