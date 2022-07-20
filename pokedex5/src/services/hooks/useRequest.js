import axios from "axios";
import { useEffect, useState } from "react";

export const useRequest = (url) => {
    const [data,setData] = useState(undefined)
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [url]);
  return data
};
