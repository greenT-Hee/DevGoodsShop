import { HomeHeader } from "../components/Header";
import { ProductListHeader } from "../components/Header";
import Banner from "../components/banner/Banner";
import ProductCard from "../components/products/ProductCard";
import Footer from "../components/Footer";
import { getCookie } from "../Cookie";

const Home = () => {
  const isCookie = getCookie("refreshToken");
  const Header =
    isCookie === undefined ? <HomeHeader /> : <ProductListHeader />;
  return (
    <>
      {Header}
      <Banner />
      <ProductCard />
      <Footer />
    </>
  );
};

export default Home;
