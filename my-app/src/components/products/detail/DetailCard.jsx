import { useEffect } from "react";
import AxiosInstance from "../../../Axios";
import DetailContent from "./DetailContent";
import { useSelector, useDispatch } from "react-redux";
import {
  detailProduct,
  removeSelectedProduct,
} from "../../../redux/actions/productsAction";

export default function DetailCard() {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();
  const productId = localStorage.getItem("id");
  console.log("DetilaCard💚", product);

  const getProductDtail = async () => {
    try {
      const response = await AxiosInstance.get(`/products/${productId}/`);
      dispatch(detailProduct(response.data));
      // console.log(response.data);
    } catch {
      console.error("Error");
    }
  };

  useEffect(() => {
    if (productId && productId !== "") {
      getProductDtail();
    }

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <section>
      <h2 className="ir">상품 상세 페이지</h2>
      <DetailContent />
    </section>
  );
}
