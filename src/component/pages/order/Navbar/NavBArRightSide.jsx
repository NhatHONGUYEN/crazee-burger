import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";

export default function NavBarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">Admin Button</div> */}
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
