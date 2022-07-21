import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { useRequest } from "../../services/hooks/useRequest";
import { BaseUrl } from "../../constants/baseUrl";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;
  const [myPokes, setMyPokes] = useState("");
  const [alert, setAlert] = useState(false)
  const [select, setSelect] = useState('')


  if (myPokes === "") {
    const getLocal = JSON.parse(localStorage.getItem("myPokes"));
    setMyPokes(getLocal ? getLocal : []);
  }

  useEffect(()=>{
    localStorage.setItem("myPokes", JSON.stringify(myPokes));
  },[myPokes])
  

  console.log(myPokes);
  const getPokeList = useRequest(`${BaseUrl}pokemon/?offset=0&limit=30`);
  const values = {
    myPokes,
    setMyPokes,
    getPokeList,    
    alert, 
    setAlert,
    select,
    setSelect
  };
  return <Provider value={values}>{props.children}</Provider>;
}
