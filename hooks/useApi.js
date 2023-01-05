import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);

  const request = async (...arg) => {
    setloading(true);
    const response = await apiFunc(...arg);
    console.log(response.problem);
    setloading(false);

    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
};

export default useApi;
