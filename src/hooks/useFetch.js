// A CUSTOM HOOK I CREATED MYSELF ON ANOTHER PROJECT, 
// YOU IMPORT IT IN THE COMPONENT IT'S TO BE USED IN 
// AND GIVE IT AN API TO FETCH DATA FROM.

// IT WILL RETURN A JAVASCRIPT OBJECT AS THE DATA GOTTEN
// ALONG WITH LOADING AND ERROR STATES


import {useEffect, useState} from 'react';

const useFetch = (api) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
       const abortComp  = new AbortController();
       setLoading(true);
       fetch(api,{
           signal: abortComp.signal
       })
       .then(
            res => {
                if(!res.ok) {
                    throw Error("Data couldn't be fetched");
                }
                return res.json();
            })
       .then((data) => {
           setLoading(false);
           setError(null);
           setData(data);
       })
       .catch((err) => {
           if(err.name === "AbortError") {
               console.log("Abort Error!")
           }
           setLoading(false);
           setError(err.message);
       })

       return () => {
           abortComp.abort();
       }
    }, [api])


    return {data, loading, error};
}
 
export default useFetch;