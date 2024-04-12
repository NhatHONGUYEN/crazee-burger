import styled from "styled-components";
import BasketCard from "./BasketCard";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext.jsx";
import { findObjectById } from "../../../../../utils/array.js";
import { checkIfProductIsClicked } from "../Menu/MainRightSide/Menu/helper.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function BasketProducts() {
  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <TransitionGroup
      component={BasketProductsStyled}
      className={"transition-group"}
    >
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu);
        return (
          <CSSTransition
            appear={true}
            classNames={"animation-basket"}
            key={basketProduct.id}
            timeout={300}
          >
            <div className="card-container">
              <BasketCard
                {...menuProduct}
                imageSource={
                  menuProduct.imageSource
                    ? menuProduct.imageSource
                    : IMAGE_COMING_SOON
                }
                quantity={basketProduct.quantity}
                onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                isClickable={isModeAdmin}
                onClick={
                  isModeAdmin
                    ? () => handleProductSelected(basketProduct.id)
                    : null
                }
                isSelected={checkIfProductIsClicked(
                  basketProduct.id,
                  productSelected.id
                )}
                className={"card"}
              />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}
const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .animation-basket-appear {
    .card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-appear-active {
    .card {
      transition: 0.5s;
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .animation-basket-enter {
    .pomme {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-basket-enter-active {
    .pomme {
      transition: 300ms;
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .animation-basket-exit {
    .pomme {
      transform: translateX(0);
      opacity: 100%;
    }
  }
  .animation-basket-exit-active {
    .pomme {
      transform: translateX(-100px);
      opacity: 0%;
      transition: 300ms;
    }
  }

  .card-container {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;

    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;
