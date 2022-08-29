import { useEffect } from "react";
import AxiosInstance from "../../../Axios";
import DetailContent from "./DetailContent";
import { useState } from "react";

export default function DetailCard() {
  const productId = localStorage.getItem("id");
  const [detailInfo, setDetailIfo] = useState([]);

  const getProductDtail = async () => {
    try {
      const response = await AxiosInstance.get(`/products/${productId}/`);
      setDetailIfo(response.data);
      console.log(response.data);
    } catch {
      console.error("Error");
    }
  };

  useEffect(() => {
    getProductDtail();
  }, []);

  return (
    <section>
      <h2 className="ir">상품 상세 페이지</h2>
      <DetailContent
        image={detailInfo.image}
        price={detailInfo.price}
        productId={detailInfo.product_id}
        productInfo={detailInfo.product_info}
        productName={detailInfo.product_name}
        stock={detailInfo.stock}
        shippingFee={detailInfo.shipping_fee}
        shippingMethod={detailInfo.shipping_method}
      />
    </section>
  );
}
