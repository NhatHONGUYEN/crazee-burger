import { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Card from "../../../../reusable-ui/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";

const IMAGE_BY_DEFAULT = "/public/coming-soon.png";

export default function Menu() {
  const { menu, isModeAdmin, handleDelete, resetMenu, setProductSelected } =
    useContext(OrderContext);

  const handleClick = (idProductSelected) => {
    const productClickedOn = menu.find(
      (product) => product.id === idProductSelected
    );
    setProductSelected(productClickedOn);
  };

  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  return (
    <MenuStyled className="menu">
      {menu.map(({ id, imageSource, title, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAULT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onDelete={() => handleDelete(id)}
            onClick={() => handleClick(id)}
            isHoverable={isModeAdmin}
            isSelected={false}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 50px 50px 150px;
  grid-row-gap: 60px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;
