import React from "react";
import { theme } from "../../../../../theme";
import styled from "styled-components";

export default function Loader() {
  return (
    <LoaderStyled>
      <span className="title">Chargement en cour...</span>
    </LoaderStyled>
  );
}

const LoaderStyled = styled.div`
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.strong};
  border-bottom-right-radius: ${theme.borderRadius.round};
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    text-align: center;
    font-family: ${theme.fonts.family.stylish};
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
  }
`;
