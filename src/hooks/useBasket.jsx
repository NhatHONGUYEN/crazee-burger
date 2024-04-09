import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, filter, find, findIndex } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddtoBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);

    const isProductAlreadInBasket = find(productToAdd.id, basketCopy);

    if (!isProductAlreadInBasket) {
      createNewProductInBasket(productToAdd, basketCopy, setBasket);
      return;
    }

    incrementProductAlreadyInBAsket(productToAdd, basketCopy);
  };
  const incrementProductAlreadyInBAsket = (productToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndex(
      productToAdd.id,
      basketCopy
    );
    basketCopy[indexOfBasketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
  };

  const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
    const newBasketProduct = {
      ...productToAdd,
      quantity: 1,
    };
    const basketUpdated = [newBasketProduct, ...basketCopy];
    setBasket(basketUpdated);
  };

  const handleDeleteBasketProduct = (idBasketProduct) => {
    const basketCopy = deepClone(basket);
    const basketUpdated = filter(idBasketProduct, basketCopy);
    setBasket(basketUpdated);
  };

  return { basket, handleAddtoBasket, handleDeleteBasketProduct };
};
