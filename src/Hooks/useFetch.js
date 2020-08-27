import { useState, useEffect} from 'react';

export const useFethc = (url, options) => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        try {
            const res = await fetch(url);
            const jsonData = await res.json();
            setData(jsonData);
        } catch (error) {
            setError(true)
        }
    };

    useEffect(() => {
        fetchData(url);
    }, [])

    return [{data,error}, fetchData];
}