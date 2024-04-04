import { useContext, useRef } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import ImagePreview from "./ImagePreview";
import TextInput from "../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig.jsx";
import styled from "styled-components";
import { theme } from "../../../../theme/index.js";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  const inputTexts = getInputTextsConfig(productSelected);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
  };

  return (
    <EditFormStyled>
      <ImagePreview
        title={productSelected.title}
        imageSource={productSelected.imageSource}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
            ref={input.name === "title" ? titleEditRef : null}
          />
        ))}
      </div>
      <div className="submit">
        <span className="sentence">
          Cliquer sur un produit du menu pour le modifier
          <span className="live-update">en temps réel</span>
        </span>
      </div>
    </EditFormStyled>
  );
}

const EditFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .sentence {
      color: ${theme.colors.primary};
      font-size: ${theme.fonts.size.SM};
      .live-update {
        text-decoration: underline;
      }
    }
  }
`;
