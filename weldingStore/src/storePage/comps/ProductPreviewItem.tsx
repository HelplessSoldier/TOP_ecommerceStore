import { Product } from "../../types";
import "./ProductPreviewItem.css";

interface ProductPreviewProps {
  product: Product;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

export function ProductPreviewItem(props: ProductPreviewProps) {
  const { name, description, imgSrc, price } = props.product;

  const handleImageClick = () => {
    props.setSelectedProduct(props.product);
  }

  return (
    <div className="productPreviewItem">
      <div className="productImageContainer" >
        <img
          src={imgSrc}
          className="productImage"
          onClick={handleImageClick}
        />
      </div>
      <div className="productDescContainer" >
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="productPrice">${price}</p>
      </div>
    </div>
  );
}
