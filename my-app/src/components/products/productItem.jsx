export default function ProductItem({
  key,
  productName,
  image,
  price,
  productInfo,
}) {
  return (
    <li>
      <img src={image} alt="상품" />
      <span>{productInfo}</span>
      <p>{productName}</p>
      <strong>{price}</strong>
    </li>
  );
}
