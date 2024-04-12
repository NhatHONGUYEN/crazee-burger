import { createContext } from "react";

export default createContext({
  username: "",
  isModeAdmin: false,
  setIsModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: false,
  setCurrentTabSelected: () => {},

  menu: [],
  handleClick: () => {},
  handleEdit: () => {},
  handleDelete: () => {},
  resetMenu: () => {},
  handleAdd: () => {},

  newProduct: {},
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},
  handleProductSelected: () => {},

  titleEditRef: null,

  basket: [],
  handleAddToBasket: () => {},
  handleDeleteBasketProduct: () => {},
});
