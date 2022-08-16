export default function ProductItem({
  productName,
  image,
  price,
  productInfo,
}) {
  return (
    <li>
      <img src={image} alt="상품 사진" />
      <span>{productInfo}</span>
      <p>{productName}</p>
      <strong>{price}</strong>
    </li>
  );
}
