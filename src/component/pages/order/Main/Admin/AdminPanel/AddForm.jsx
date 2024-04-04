import OrderContext from "../../../../../../context/OrderContext";
import { useContext, useState } from "react";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import Form from "./Form.jsx";
import SubmitButton from "./SubmitButton.jsx";

export default function AddForm() {
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };
    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);
    displaySuccesMessage();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const displaySuccesMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Form
      product={newProduct}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isSubmitted={isSubmitted}
    >
      <SubmitButton isSubmitted={isSubmitted} />
    </Form>
  );
}
