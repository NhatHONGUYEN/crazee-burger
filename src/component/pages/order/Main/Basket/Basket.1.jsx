import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";
import OrderContext from "../../../../../context/OrderContext";
import { useContext } from "react";
import { findObjectById, isEmpty } from "../../../../../utils/array";
import { BasketStyled } from "./Basket";

export default function Basket() {
  const { basket, menu } = useContext(OrderContext);

  const isBasketEmpty = isEmpty(basket);

  const sumToPay = basket.reduce((total, basketProduct) => {
    const menuProduct = findObjectById(basketProduct.id, menu);
    total += menuProduct.price * basketProduct.quantity;
    return total;
  }, 0);

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(sumToPay)} />
      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}
      <Footer />
    </BasketStyled>
  );
}
