import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext } from "react";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const newProduct = {
    id: new Date().getTime(),
    title: "Nouveau produit",
    imageSource:
      "https://www.biofournil.com/wp-content/uploads/2021/02/BRIOCHE-BIOFOURNIL_web.jpg",
    price: 2.5,
  };

  const handlesubmit = (event) => {
    event.preventDefault();
    handleAdd(newProduct);
  };

  return (
    <AddFormStyled onSubmit={handlesubmit}>
      <div className="image-preview">ImagePreview</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Image URL" />
        <input type="text" placeholder="Prix" />
      </div>
      <button className="submit-button">Submit button</button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  border: 3px solid black;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas:
    "image-preview   input-fields"
    "image-preview   input-fields"
    "image-preview   input-fields"
    ".               submit-button";

  height: 100%;
  width: 70%;

  .image-preview {
    grid-area: image-preview;
    background: red;
  }

  .input-fields {
    grid-area: input-fields;
    background: blue;
    display: grid;
  }

  .submit-button {
    grid-area: submit-button;
    background: green;
  }
`;
