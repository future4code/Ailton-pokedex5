import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { useRequest } from "../../services/hooks/useRequest";
import { BaseUrl } from "../../constants/baseUrl";
import { useLoading } from "../../services/hooks/useLoading";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;
  const [myPokes, setMyPokes] = useState("");
  const [alert, setAlert] = useState(false);
  const [select, setSelect] = useState("");
  const [pagination, setPagination] = useState(0);
  const [loading, setLoading] = useLoading();
  const [error, setError] = useState(false)

  if (myPokes === "") {
    const getLocal = JSON.parse(localStorage.getItem("myPokes"));
    setMyPokes(getLocal ? getLocal : []);
  }

  useEffect(() => {
    localStorage.setItem("myPokes", JSON.stringify(myPokes));
  }, [myPokes]);
  console.log(loading);
  const getPokeList = useRequest(
    `${BaseUrl}pokemon/?offset=${pagination * 30}&limit=30`,
    setLoading
  );
  const totalPages = getPokeList?.count / 30;
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
    totalPages,
    loading,
    setLoading,
    setError,
    error
  };
  return <Provider value={values}>{props.children}</Provider>;
}
