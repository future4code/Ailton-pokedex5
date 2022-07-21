import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { useRequest } from "../../services/hooks/useRequest";
import { BaseUrl } from "../../constants/baseUrl";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;  
  const [myPokes, setMyPokes] = useState("");
  const [alert, setAlert] = useState(false);
  const [select, setSelect] = useState("");
  const [pagination, setPagination] = useState(0);
  
  
  if (myPokes === "") {
    const getLocal = JSON.parse(localStorage.getItem("myPokes"));
    setMyPokes(getLocal ? getLocal : []);
  }
  
  useEffect(() => {
    localStorage.setItem("myPokes", JSON.stringify(myPokes));
  }, [myPokes]);  
  
  const getPokeList = useRequest(`${BaseUrl}pokemon/?offset=${(pagination*30)}&limit=30`);
  const totalPages = getPokeList?.count / 30  
  const values = {
    myPokes,
    setMyPokes,
    getPokeList,
    alert,
    setAlert,
    select,
    setSelect,
    pagination,
    setPagination,
    totalPages
  };
  return <Provider value={values}>{props.children}</Provider>;
}
