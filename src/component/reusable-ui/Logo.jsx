import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="/public/images/logo-orange.png" alt="" />
      <h1>BURGER</h1>
    </LogoStyled>
  );
}
const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);
  font-family: "Amatic SC", cursive;

  h1 {
    display: inline;
    text-align: center;
    color: orange;
    font-size: 36px;
    line-height: 1em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px;
    margin: 0 5px;
  }
`;
