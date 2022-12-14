import PayedCard from "../components/payed/PayedCard";
import { getCookie } from "../Cookie";
import { HomeHeader, ProductListHeader } from "../components/Header";

export default function PayeList() {
  const isCookie = getCookie("refreshToken");
  const Header =
    isCookie === undefined ? <HomeHeader /> : <ProductListHeader />;

  return (
    <>
      {Header}
      <PayedCard />
    </>
  );
}
