import axios from "axios";
import {useEffect, useState } from "react";


export const useRequest = (url, loading) => {
    const [data,setData] = useState(undefined);
   
  useEffect(() => {
    loading(true);
    axios
      .get(url)
      .then((res) => {
        loading(false);
        setData(res.data);
      })
      .catch((err) => {
        loading(false)
        console.log(err.response);
      });
  }, [url]);
  return data
};
