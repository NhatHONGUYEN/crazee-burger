import styled from "styled-components";

import Logo from "../../../reusable-ui/Logo";
import NavBarRightSide from "./NavBArRightSide";
import { theme } from "../../theme";
import { refreshPage } from "../../../../utils/window";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo className={"logo-order-page"} onClick={() => refreshPage()} />
      <NavBarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};

  .logo-order-page {
    cursor: pointer;
  }
`;
