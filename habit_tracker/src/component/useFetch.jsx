import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const abortControl = new AbortController();

        fetch(url, { signal: abortControl.signal })
            .then(response => {
                if (!response.ok) {
                    throw ("Could not fetch the data for that resource");
                }
                return response.json();
            })
            .then(data => {
                setLoading(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setLoading(false);
                    setError(err.message);
                }
            })
        return () => abortControl.abort();
    }, [url]);

    return { data, error, loading };
}

export default useFetch;