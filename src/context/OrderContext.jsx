import { createContext } from "react";

export default createContext({
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

  newProduct: {},
  setNewProduct: () => {},

  productSelected: {},
  setProductSelected: () => {},
});
