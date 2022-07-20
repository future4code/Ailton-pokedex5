import React, {useState} from 'react'
import { GlobalContext } from "./GlobalContext";
import { getPokemon } from '../../services/requests'


export default function GlobalState(props) {
    const Provider = GlobalContext.Provider;
    const [pokeId, setPokeId] = useState([]);
    const values = {
        pokeId,
        setPokeId,
        getPokemon
      };
        console.log(props.children)
  return (
    <Provider value={values}>
        {props.children}
    </Provider>
  )
}


