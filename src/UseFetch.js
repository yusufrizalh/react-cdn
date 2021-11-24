import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((result) => {
          console.log(result);
          if (!result.ok) {
            throw Error("Could not fetch data for resources!");
          }
          return result.json();
        })
        .then((dataJson) => {
          setData(dataJson);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.message);
        })
        .finally(() => {
          console.log("Finally is called!");
        });
    }, 4000);
  }, [url]);

  return { data, isLoading, error };
};

export default UseFetch;
