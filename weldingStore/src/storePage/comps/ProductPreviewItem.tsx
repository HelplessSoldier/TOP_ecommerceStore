import { Product } from "../../types";
import "./ProductPreviewItem.css";

export function ProductPreviewItem(props: { product: Product }) {
  const { name, description, imgSrc, price } = props.product;

  return (
    <div className="productPreviewItem">
      <div className="productImageContainer" >
        <img src={imgSrc} className="productImage" />
      </div>
      <div className="productDescContainer" >
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="productPrice">${price}</p>
      </div>
    </div>
  );
}
