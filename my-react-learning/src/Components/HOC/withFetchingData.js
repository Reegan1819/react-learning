import React, { useEffect, useState } from "react";

const withFetchingData = (url) => (Components) => {
  return function WithFetchingData(props) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
          const result = await response.json();
          setData(result?.data || result);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [url]);

    return (
      <Components data={data} loading={loading} error={error} {...props} />
    );
  };
};

export default withFetchingData;
