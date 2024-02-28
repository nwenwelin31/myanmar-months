import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const abortCont = new AbortController();
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() =>{
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            //json response data
            .then((response) => {
                if(!response.ok) {// error coming back from server
                    throw Error ('could not fetch the month data');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
                
            })
            .catch(error => {
                if(error.name === 'AbortError'){
                    console.log('fetch aborted');
                }
                else{
                    setError(false);
                    setIsPending(false);
                }
            }) 
        },1000);
        return () => abortCont.abort();
       },[url])
    return {data, isPending, error}
}

export default useFetch
