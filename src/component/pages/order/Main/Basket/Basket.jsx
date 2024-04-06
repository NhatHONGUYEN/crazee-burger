import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import EmptyBasket from "./EmptyBasket";
import OrderContext from "../../../../../context/OrderContext";

export default function Basket() {
  const { basket } = useContext(OrderContext);
  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />
      <EmptyBasket basket={basket} />
      {/* {isBasketEmpty ? <EmptyBasket/> : <BasketProducts basket={basket}/>} */}
      <Footer />
    </BasketStyled>
  );
}
const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
