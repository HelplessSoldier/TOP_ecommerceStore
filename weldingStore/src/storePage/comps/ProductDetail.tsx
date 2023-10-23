import "./ProductDetail.css";
import { Product } from "../../types";
import { useContext } from "react";
import { CartContext } from "../../App";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail(props: ProductDetailProps) {
  const { cart, setCart } = useContext(CartContext);

  const handleAddToCartButton = () => {
    const newCart: Product[] = [...cart, props.product];
    setCart(newCart);
  }

  return (
    <div className="productDetailContainer">
      <img
        src={props.product.imgSrc}
        className="productDetailImages"
      />
      <div className="productDetailsAndBuyButtonContainer">
        <div className="productDetailTextBlock">
          <h2>{props.product.name}</h2>
          <hr />
          <p>- Material: {props.product.productDetails.material}</p>
          <p>- Lining: {props.product.productDetails.lining}</p>
          <p>- Made In: {props.product.productDetails.madeIn}</p>
          <p><b>${props.product.price}</b></p>
        </div>
        <button
          className="addToCartButton"
          onClick={handleAddToCartButton}
        >Add to cart</button>
      </div>
    </div>
  )
}

