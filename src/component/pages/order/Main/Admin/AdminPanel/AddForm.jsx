import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";

const EMPTY_PRODUCT = {
  id: "",
  title: "Sam",
  imageSource: "",
  price: 14,
};

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handlesubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: new Date().getTime(),
    };
    handleAdd(newProductToAdd);
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    const name = event.target.name;
    setNewProduct({ ...newProduct, [name]: newValue });
  };

  return (
    <AddFormStyled onSubmit={handlesubmit}>
      <div className="image-preview">ImagePreview</div>
      <div className="input-fields">
        <input
          name="title"
          value={newProduct.title}
          type="text"
          placeholder="Nom"
          onChange={handleChange}
        />
        <input
          name="imageSource"
          value={newProduct.imageSource}
          type="text"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          name="price"
          value={newProduct.price ? newProduct.price : ""}
          type="text"
          placeholder="Prix"
          onChange={handleChange}
        />
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
