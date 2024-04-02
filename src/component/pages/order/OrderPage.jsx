import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import { theme } from "../theme";
import Main from "./Main/Main";
import OrderContext from "../../../context/OrderContext";
import { useState } from "react";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../enums/product";

export default function OrderPage() {
  //state

  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);

  //comportement

  const handleAdd = (newProduct) => {
    const menuCopy = JSON.parse(JSON.stringify(menu));

    const menuUpdated = [newProduct, ...menuCopy];

    setMenu(menuUpdated);
  };

  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = JSON.parse(JSON.stringify(menu));

    const menuUpdated = menuCopy.filter(
      (product) => product.id !== idOfProductToDelete
    );
    setMenu(menuUpdated);
  };

  const handleEdit = (productBeingEdited) => {
    const menuCopy = JSON.parse(JSON.stringify(menu));

    const indexOfProductToEdit = menu.findIndex(
      (menuProduct) => menuProduct.id === productBeingEdited.id
    );

    menuCopy[indexOfProductToEdit] = productBeingEdited;

    setMenu(menuCopy);
  };
  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    productSelected,
    setProductSelected,
    handleEdit,
  };
  //affichage (render)
  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
