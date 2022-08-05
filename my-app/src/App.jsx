import { Route, BrowserRouter, Routes } from "react-router-dom";
import "../src/styles/reset.css";
import "../src/styles/global.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  // 상품 목록-메인 홈(로그인했을 때, 안했을 때)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );

  // 로그인
  // 회원가입
  // 상품 디테일
  // 장바구니
  // 결제 페이지
  // 404 페이지
}

export default App;
