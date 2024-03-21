import styled from "styled-components";
import { theme } from "../pages/theme";
export default function Tab({ Icon }) {
  return (
    <TabStyled>
      <div className="icon">{Icon}</div>
    </TabStyled>
  );
}

const TabStyled = styled.button`
  border: 1px solid blue;
  padding: 0 20px;
  height: 43px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: relative;
  left: 5%;
  top: 1px;

  // fonts
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};

  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};

  //border
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};

  //border-radius
  border-radius: ${theme.borderRadius.round};
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
  }

  .icon {
    display: flex;
  }
`;
