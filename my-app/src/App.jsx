import { Route, BrowserRouter, Routes } from "react-router-dom";
import "../src/styles/reset.css";
import "../src/styles/global.css";
import Home from "../src/pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ProductDetail from "./pages/ProductDetail";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signUp" element={<SignUpPage />} />
        <Route exact path="/productDetail/:id" element={<ProductDetail />} />
        <Route exact path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
