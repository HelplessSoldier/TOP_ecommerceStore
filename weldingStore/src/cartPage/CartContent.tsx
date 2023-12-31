import "./CartContent.css"
import { useContext, useState } from "react"
import { CartContext } from "../App"
import { QuantitySelector } from "./QuantitySelector";
import { Product } from "../types";
import { EndPage } from "./EndPage";
import products from "../siteData/products.json";

export function CartContent() {
  const { cart } = useContext(CartContext);
  const [checkoutClicked, setCheckoutClicked] = useState(false)

  const getPriceSum = () => {
    let sum: number = 0;
    let multi: number = 1;
    for (const item of cart) {
      sum += item.price;
    }
    if (hasFullSet(cart)) {
      multi = 0.9;
    }
    return sum * multi;
  }

  const getFilteredCart = () => {
    const filteredCart: Product[] = [];
    for (const item of cart) {
      if (!filteredCart.includes(item)) {
        filteredCart.push(item);
      }
    }
    return filteredCart.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }

  const handleCheckoutClick = () => {
    setCheckoutClicked(true);
  }

  if (!checkoutClicked) {
    return (
      <div className="cartContainer">
        <div className="cartContentContainer" >
          {getFilteredCart().map((item) => {
            return (
              <div className="cartContentItem">
                <img className="cartImage" src={item.imgSrc} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <QuantitySelector product={item} />
              </div>
            )
          })}
        </div>
        <div className="checkoutInfoContainer">
          <p>Total:  ${getPriceSum()}
            <span className="discountText">
              {hasFullSet(cart) ? "-10% applied!" : null}
            </span>
          </p>
          <button
            className="checkoutButton"
            onClick={() => handleCheckoutClick()}
          >
            Checkout
          </button>
        </div>
      </div>
    )
  } else {
    return <EndPage />
  }
}

interface SeenObject {
  [key: string]: number;
}

function hasFullSet(cart: Product[]) {
  const productCount: number = products.length;
  let cartCount: number = 0;
  const seen: SeenObject = {}
  for (const item of cart) {
    if (!seen[item.id]) {
      seen[item.id] = 1;
      cartCount++;
    }
  }
  return (cartCount === productCount);
}
