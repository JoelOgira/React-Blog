import { useState, useEffect } from "react";

const useFetch = (url) => {

    const title = 'Better Health & Company'
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch Data for requested Resource!');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setIsLoading(null);
                setError(err.message);
            });
    }, []);

    return {title, data, isLoading, error}

}

export default useFetch;