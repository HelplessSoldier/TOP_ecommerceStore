import { Product } from "../../types";

export function ProductPreviewItem(props: { product: Product }) {
  const { id, name, description, productDetails, imgSrc } = props.product;

  return (
    <div className="productPreviewItem">
      <img src={imgSrc} />
      <h2>{name}</h2>
      <p>{description}</p>
      <ul>
        <li>Material: {productDetails.material}</li>
        <li>Lining: {productDetails.lining}</li>
        <li>Made in: {productDetails.madeIn}</li>
      </ul>
    </div>
  );
}
