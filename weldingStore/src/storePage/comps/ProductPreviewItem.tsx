import { Product } from "../../types";
import "./ProductPreviewItem.css";

export function ProductPreviewItem(props: { product: Product }) {
  const { name, description, productDetails, imgSrc } = props.product;

  return (
    <div className="productPreviewItem">
      <div className="productImageContainer" >
        <img src={imgSrc} className="productImage" />
      </div>
      <div className="productDescContainer" >
        <h2>{name}</h2>
        <p>{description}</p>
        <ul>
          <li>Material: {productDetails.material}</li>
          <li>Lining: {productDetails.lining}</li>
          <li>Made in: {productDetails.madeIn}</li>
        </ul>
      </div>
    </div>
  );
}
