import { HomeHeader } from "../components/Header";
import Banner from "../components/Banner";
import ProductCard from "../components/products/ProductCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Banner />
      <ProductCard />
      <Footer />
    </>
  );
};

export default Home;
