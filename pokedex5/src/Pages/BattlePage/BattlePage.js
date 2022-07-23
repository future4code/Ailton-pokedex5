import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import { MainBattle, ContainerChoices } from "./styled";
import { CardBattle } from "../../Components/CardBattle/CardBattle";
import { GlobalContext } from "../../Components/Global/GlobalContext";
import { useRequest } from "../../services/hooks/useRequest";
import { useParams } from "react-router-dom";
import { BaseUrl } from "../../constants/baseUrl";
import { DivErro } from "../../styleGeral";

export default function BattlePage() {
  const { myPokes, loading, setLoading, count} = useContext(GlobalContext);
  const [selectPokemon, setSelectPokemon] = useState("");
  const[random, setRandom]= useState("");
  const onChangePokemon = (event) => {
    setSelectPokemon(event.target.value);
  };

  const randomPoke = ()=>{
    setRandom(  Math.floor(Math.random() * (count - 1)) + 1)
  };
  
  return (
    <div>
      <Header />
      <MainBattle>
        <ContainerChoices>
          <select onChange={onChangePokemon}>
            <option value={""}>Selecione um pokemon</option>
            {myPokes.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <button onClick={randomPoke}>Encontre um oponente</button>
        </ContainerChoices>
        {loading && <DivErro />}
        {!loading && selectPokemon && (
          <CardBattle selectPokemon={selectPokemon} setLoading={setLoading} />
        )}
        { !loading && random &&
        <CardBattle selectPokemon={random} setLoading={setLoading}/>
      }
      </MainBattle>
    </div>
  );
}
