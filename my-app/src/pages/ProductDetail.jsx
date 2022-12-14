import { HomeHeader } from "../components/Header";
import { ProductListHeader } from "../components/Header";
import DetailCard from "../components/products/detail/DetailCard";
import { getCookie } from "../Cookie";

export default function ProductDetail() {
  const isCookie = getCookie("refreshToken");
  const Header =
    isCookie === undefined ? <HomeHeader /> : <ProductListHeader />;
  return (
    <>
      {Header}
      <DetailCard />
    </>
  );
}
