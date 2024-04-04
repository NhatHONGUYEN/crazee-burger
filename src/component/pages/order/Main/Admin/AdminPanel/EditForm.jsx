import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage.jsx";
import Form from "./Form.jsx";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = { ...productSelected, [name]: value };

    setProductSelected(productBeingUpdated);
    handleEdit(productBeingUpdated);
  };

  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
}
