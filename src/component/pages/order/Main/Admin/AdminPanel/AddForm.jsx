import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const [title, setTitle] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [price, setPrice] = useState(0);

  const handlesubmit = (event) => {
    event.preventDefault();
    handleAdd(newProduct);
  };

  const newProduct = {
    id: new Date().getTime(),
    title: title,
    imageSource: imageSource,
    price: price,
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageSource(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <AddFormStyled onSubmit={handlesubmit}>
      <div className="image-preview">ImagePreview</div>
      <div className="input-fields">
        <input
          value={title}
          type="text"
          placeholder="Nom"
          onChange={handleTitleChange}
        />
        <input
          value={imageSource}
          type="text"
          placeholder="Image URL"
          onChange={handleImageChange}
        />
        <input
          value={price}
          type="text"
          placeholder="Prix"
          onChange={handlePriceChange}
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
