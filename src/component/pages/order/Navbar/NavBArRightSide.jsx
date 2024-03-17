import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";
import ToggleButon from "../../../reusable-ui/ToggleButton";

export default function NavBarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <ToggleButon
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DESACTIVER LE MODE ADMIN"
      />
      <Profile className={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-button {
    background: lightblue;
  } */
  .profile {
    background: yellow;
  }
`;
