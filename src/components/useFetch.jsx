import { useState, useEffect } from "react";

const useFetch = (API_URL) => {

    const [data, setData] = useState('');
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL)
          .then((res) => {
    
            if (!res.ok) {
              throw Error("Sorry there is an error");
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsloading(false);
            setError(null)
          })
          .catch((error) => {
            
            setError(error.message)
            setIsloading(false)
            console.error(error.message);
          });
      }, [API_URL]);

      return {data,isloading,error}
}
 
export default useFetch;