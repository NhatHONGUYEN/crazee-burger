import { Route, Routes } from "react-router-dom";
import LoginPage from "./component/pages/login/LoginPage";
import OrderPage from "./component/pages/order/OrderPage";
import ErrorPage from "./component/pages/error/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
