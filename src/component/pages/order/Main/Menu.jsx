import { useContext, useState } from "react";
import styled from "styled-components";

import { theme } from "../../theme";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";

export default function Menu() {
  const { menu } = useContext(OrderContext);

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, imageSource, title, price }) => {
        return (
          <Card
            key={id}
            imageSource={imageSource}
            title={title}
            leftDescription={formatPrice(price)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 50px 50px 150px;
  grid-row-gap: 60px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
