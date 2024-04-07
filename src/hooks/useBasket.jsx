import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, find } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddtoBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);

    const isProductAlreadInBasket = find(productToAdd.id, basketCopy);

    if (!isProductAlreadInBasket) {
      const newBasketProduct = {
        ...productToAdd,
        quantity: 1,
      };

      const basketUpdated = [newBasketProduct, ...basketCopy];

      setBasket(basketUpdated);
    }
  };

  return { basket, handleAddtoBasket };
};
