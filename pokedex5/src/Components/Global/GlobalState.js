import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { useRequest } from "../../services/hooks/useRequest";
import { BaseUrl } from "../../constants/baseUrl";

export default function GlobalState(props) {
  const Provider = GlobalContext.Provider;
  const [pokeId, setPokeId] = useState([]);
  const [pokeList, setPokeList] = useState([]);
  const getPoke = useRequest(`${BaseUrl}pokemon/?offset=0&limit=20`);
  console.log(getPoke);
  const values = {
    pokeId,
    setPokeId,
    pokeList,
  };
  return <Provider value={values}>{props.children}</Provider>;
}
