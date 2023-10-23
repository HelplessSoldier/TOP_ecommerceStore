import { useContext } from "react"
import { CartContext } from "../App"

export function CartContent() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cartContentContainer" >
      {cart.map((item) => {
        return (
          <div className="cartContentItem">
            <img src={item.imgSrc} />
            <h2>{item.name}</h2>
          </div>
        )
      })}
    </div>
  )
}
