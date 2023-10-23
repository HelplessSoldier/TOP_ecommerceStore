import { useContext } from "react"
import { CartContext } from "../App"
import { Product } from "../types";

export function CartContent() {
  const { cart, setCart } = useContext(CartContext);

  const handleRemoveButton = (itemToRemove: Product) => {
    const newCart = cart.filter((item) => item != itemToRemove);
    setCart(newCart);
  }

  return (
    <div className="cartContentContainer" >
      {cart.map((item) => {
        return (
          <div className="cartContentItem">
            <img className="cartImage" src={item.imgSrc} />
            <div className="cartItemText" >
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
