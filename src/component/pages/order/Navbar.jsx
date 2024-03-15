import styled from "styled-components";
import RightSide from "./RightSide";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">leftside</div>
      <RightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: blue;
  height: 10vh;
  display: flex;
  justify-content: space-between;

  .left-side {
    background: pink;
  }
`;
