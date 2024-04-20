import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import Card from "../../../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../../../utils/maths";
import OrderContext from "../../../../../../../context/OrderContext.jsx";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import {
  EMPTY_PRODUCT,
  IMAGE_COMING_SOON,
  IMAGE_NO_STOCK,
} from "../../../../../../../enums/product";
import { isEmpty } from "../../../../../../../utils/array";
import Loader from "./Loader.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { menuAnimation } from "../../../../../theme/animation.js";
import { convertStringToBoolean } from "../../../../../../../fakeData/string.js";
import RibbonAnimated, { ribbonAnimation } from "./RibbonAnimated.jsx";

export default function Menu() {
  const {
    username,
    menu,
    isModeAdmin,
    handleDelete,
    resetMenu,
    productSelected,
    setProductSelected,
    handleAddToBasket,
    handleDeleteBasketProduct,
    handleProductSelected,
  } = useContext(OrderContext);

  const handleCardDelete = (event, idProductToDelete) => {
    event.stopPropagation();
    handleDelete(idProductToDelete, username);
    handleDeleteBasketProduct(idProductToDelete, username);
    idProductToDelete === productSelected.id &&
      setProductSelected(EMPTY_PRODUCT);
  };

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation();
    handleAddToBasket(idProductToAdd, username);
  };

  let cardContainerClassName = isModeAdmin
    ? "card-container is-hoverable"
    : "card-container";

  if (menu === undefined) return <Loader />;

  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={() => resetMenu(username)} />;
  }

  return (
    <TransitionGroup component={MenuStyled} className="menu">
      {menu.map(
        ({ id, imageSource, title, price, isAvailable, isPublicised }) => {
          return (
            <CSSTransition classNames={"menu-animation"} key={id} timeout={300}>
              <div className={cardContainerClassName}>
                {convertStringToBoolean(isPublicised) && <RibbonAnimated />}
                <Card
                  title={title}
                  imageSource={imageSource ? imageSource : IMAGE_COMING_SOON}
                  leftDescription={formatPrice(price)}
                  hasDeleteButton={isModeAdmin}
                  onDelete={(event) => handleCardDelete(event, id)}
                  onClick={isModeAdmin ? () => handleProductSelected(id) : null}
                  isHoverable={isModeAdmin}
                  isSelected={checkIfProductIsClicked(id, productSelected.id)}
                  onAdd={(event) => handleAddButton(event, id)}
                  overlapImageSource={IMAGE_NO_STOCK}
                  isOverlapImageVisible={
                    convertStringToBoolean(isAvailable) === false
                  }
                />
              </div>
            </CSSTransition>
          );
        }
      )}
    </TransitionGroup>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 50px 50px 150px;
  grid-row-gap: 60px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  ${menuAnimation}

  .card-container {
    position: relative;
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};

    &.is-hoverable {
      &:hover {
        transform: scale(1.05);
        transition: ease-out 0.4s;
      }
    }
  }
  .ribbon {
    z-index: 2;
  }
  ${ribbonAnimation}
`;
