import { HomeHeader } from "../components/Header";
import { ProductListHeader } from "../components/Header";
import Banner from "../components/banner/Banner";
import ProductCard from "../components/products/ProductCard";
import Footer from "../components/Footer";
import { getCookie } from "../Cookie";
import MyModal from "../components/MyModal";

const Home = () => {
  const isCookie = getCookie("refreshToken");
  console.log(isCookie);
  if (isCookie === undefined) {
    return (
      <>
        <HomeHeader />
        <Banner />
        <ProductCard />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <ProductListHeader />
        <Banner />
        <ProductCard />
        <Footer />
      </>
    );
  }
};

export default Home;
