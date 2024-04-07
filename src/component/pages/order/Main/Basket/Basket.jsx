import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";
import { theme } from "../../../theme";

export default function Basket() {
  const { basket } = useContext(OrderContext);

  const isBasketEmpty = basket.length === 0;

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts basket={basket} />}
      <Footer />
    </BasketStyled>
  );
}
const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;