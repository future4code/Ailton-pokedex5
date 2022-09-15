import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import snorlax from "../../assets/snorlax.png";
import { ErrorImage, DivError } from "./styled";
import { GlobalContext } from "../../Components/Global/GlobalContext";

export default function ErrorPage() {
  const { setError } = useContext(GlobalContext);
  setError(false);
  return (
    <div>
      <Header />
      <DivError>
        <ErrorImage src={snorlax} />
      </DivError>
    </div>
  );
}
