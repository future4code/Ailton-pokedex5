import React from "react";
import { ContainerBar, Progress } from "./styled";

export const ProgressBar = (props) => {
  return (
    <ContainerBar>
      <Progress item={props.item} />
    </ContainerBar>
  );
};
