import { HomeHeader } from "../components/Header";
import { ProductListHeader } from "../components/Header";
import { getCookie } from "../Cookie";
import BuyingList from "../components/payment/BuyingList";

export default function ProductDetail() {
  const isCookie = getCookie("refreshToken");
  const Header =
    isCookie === undefined ? <HomeHeader /> : <ProductListHeader />;
  return (
    <>
      {Header}
      <BuyingList />
    </>
  );
}
