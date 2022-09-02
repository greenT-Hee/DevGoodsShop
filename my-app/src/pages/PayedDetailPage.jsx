import PayedDetail from "../components/payed/PayedDetail";
import { HomeHeader, ProductListHeader } from "../components/Header";
import { getCookie } from "../Cookie";

export default function PayedDetailPage() {
  const isCookie = getCookie("refreshToken");
  const Header =
    isCookie === undefined ? <HomeHeader /> : <ProductListHeader />;
  return (
    <>
      {Header}
      <PayedDetail />;
    </>
  );
}
