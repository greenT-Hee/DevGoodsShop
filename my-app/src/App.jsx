import { Route, BrowserRouter, Routes } from "react-router-dom";
import "../src/styles/reset.css";
import "../src/styles/global.css";
import Home from "../src/pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/productList" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );

  // 상품 디테일
  // 장바구니
  // 결제 페이지
  // 404 페이지
}

export default App;
