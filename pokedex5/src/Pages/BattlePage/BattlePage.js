import React, { useContext, useState } from "react";
import Header from "../../Components/Header/Header";
import {
  MainBattle,
  ContainerChoices,
  ContainerCards,
  ButtonBattle,
  ButtonOpp,
  SelectOpp,
  Option,
} from "./styled";
import { CardBattle } from "../../Components/CardBattle/CardBattle";
import { GlobalContext } from "../../Components/Global/GlobalContext";
import { DivErro } from "../../styleGeral";
import Alert from "../../Components/Alert/Alert";

export default function BattlePage() {
  const { myPokes, loading, setLoading, setAlert, setSelect } =
    useContext(GlobalContext);
  const [selectPokemon, setSelectPokemon] = useState("");
  const [myPokeStats, setMyPokeStats] = useState("");
  const [rivalStats, setRivalStats] = useState("");
  const [random, setRandom] = useState("");
  const [winner, setWinner] = useState("");
  const onChangePokemon = (event) => {
    setSelectPokemon(event.target.value);
  };

  const randomPoke = () => {
    setRandom(Math.floor(Math.random() * (905 - 1)) + 1);
  };

  const battleInfo = () => {
    if (myPokeStats.stats > rivalStats.stats) {
      setWinner({
        winner: "You win!",
        message: `E o pokemon vencedor é ${
          myPokeStats.name[0].toUpperCase() + myPokeStats.name.substr(1)
        }!`,
      });
    } else if (rivalStats.stats > myPokeStats.stats) {
      setWinner({
        winner: "You lose!",
        message: `E o pokemon vencedor é ${
          rivalStats.name[0].toUpperCase() + rivalStats.name.substr(1)
        }!`,
      });
    } else {
      setWinner({
        winner: `Empate!`,
      });
    }
    setSelect("battle");
    setAlert(true);
  };
  return (
    <div>
      <Alert winner={winner} />
      <Header />
      <MainBattle>
        <ContainerChoices>
          <SelectOpp onChange={onChangePokemon}>
            <option value={""}>Selecione um pokemon</option>
            {myPokes.map((item) => {
              return (
                <Option key={item} value={item}>
                  {item}
                </Option>
              );
            })}
          </SelectOpp>
          {selectPokemon && (
            <ButtonOpp onClick={randomPoke}>Encontre um oponente</ButtonOpp>
          )}
        </ContainerChoices>
        {loading && <DivErro />}
        <ContainerCards>
          {!loading && selectPokemon && (
            <CardBattle
              selectPokemon={selectPokemon}
              setLoading={setLoading}
              totalStats={setMyPokeStats}
            />
          )}
          {!loading && random && <ButtonBattle onClick={battleInfo} />}
          {selectPokemon && !loading && random && (
            <CardBattle
              selectPokemon={random}
              setLoading={setLoading}
              totalStats={setRivalStats}
            />
          )}
        </ContainerCards>
      </MainBattle>
    </div>
  );
}
