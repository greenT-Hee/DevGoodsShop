import React from "react";
import { useLocation, useNavigate } from "react-router";

export default function BuyingList() {
  const location = useLocation();

  console.log(location.state);

  return (
    <section>
      <h2>주문/결제하기</h2>
      <ul>
        <li>상품정보</li>
        <li>할인</li>
        <li>베송비</li>
        <li>주문금액</li>
      </ul>
      <ul>
        <li>
          <img src="" alt="" />
          <p></p>
          <p></p>
          <p></p>
        </li>
      </ul>
    </section>
  );
}
