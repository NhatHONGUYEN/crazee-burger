import { Link } from "react-router-dom";
import styled from "styled-components";

export default function RightSide({ username }) {
  return (
    <RightSideStyled>
      <h1>Bonjour {username} </h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </RightSideStyled>
  );
}

const RightSideStyled = styled.div`
  background: purple;
`;
