import { HomeHeader } from "../components/Header";
import { ProductListHeader } from "../components/Header";
import { getCookie } from "../Cookie";
import PayingList from "../components/payment/PayingList";
import Shipping from "../components/payment/Shipping";

export default function ProductDetail() {
  const isCookie = getCookie("refreshToken");
  const Header =
    isCookie === undefined ? <HomeHeader /> : <ProductListHeader />;
  return (
    <>
      {Header}
      <PayingList />
      <Shipping />
    </>
  );
}
