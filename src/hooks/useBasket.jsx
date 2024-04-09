import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import {
  deepClone,
  removeObjectById,
  findObjectById,
  findIndexById,
} from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddtoBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);

    const isProductAlreadInBasket = findObjectById(productToAdd.id, basketCopy);

    if (!isProductAlreadInBasket) {
      createNewProductInBasket(productToAdd, basketCopy, setBasket);
      return;
    }

    incrementProductAlreadyInBAsket(productToAdd, basketCopy);
  };
  const incrementProductAlreadyInBAsket = (productToAdd, basketCopy) => {
    const indexOfBasketProductToIncrement = findIndexById(
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
    const basketUpdated = removeObjectById(idBasketProduct, basketCopy);
    setBasket(basketUpdated);
  };

  return { basket, handleAddtoBasket, handleDeleteBasketProduct };
};
