import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import { theme } from "../theme";
import Main from "./Main/Main";
import OrderContext from "../../../context/OrderContext";
import { useEffect, useRef, useState } from "react";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { findObjectById } from "../../../utils/array";
import { useParams } from "react-router-dom";
import { getMenu } from "../../../api/product";
import { getLocalStorage } from "../../../utils/window";

export default function OrderPage() {
  //state

  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
  const titleEditRef = useRef();
  const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } =
    useMenu();
  const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
    useBasket();
  const { username } = useParams();

  //comportement

  const handleProductSelected = async (idProductClicked) => {
    const productClickedOn = findObjectById(idProductClicked, menu);
    await setIsCollapsed(false);
    await setCurrentTabSelected("edit");
    await setProductSelected(productClickedOn);
    titleEditRef.current.focus();
  };

  const initialiseMenu = async () => {
    const menuReceived = await getMenu(username);
    setMenu(menuReceived);
  };

  const initialiseBasket = () => {
    const basketReceived = getLocalStorage(username);
    if (basketReceived) setBasket(basketReceived);
  };

  useEffect(() => {
    initialiseMenu();
  }, []);

  useEffect(() => {
    initialiseBasket();
  }, []);

  const orderContextValue = {
    username,
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
    titleEditRef,
    basket,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
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
