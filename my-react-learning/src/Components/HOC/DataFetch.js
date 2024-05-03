import React from "react";
import withFetchingData from "./withFetchingData";

const url = "https://jsonplaceholder.typicode.com/posts";

const DataFetch = (props) => {
  console.log(props);

  const { data, loading, error } = props;
  return (
    <div>
      <h2>Data Fetch</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && data?.map((item) => <div key={item?.id}>{item?.title}</div>)}
    </div>
  );
};

export default withFetchingData(url)(DataFetch);
