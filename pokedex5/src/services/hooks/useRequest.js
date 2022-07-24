import axios from "axios";
import { useEffect, useState } from "react";

export const useRequest = (url, setError) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError && setError(err.response);
      });
  }, [url]);
  return data;
};
