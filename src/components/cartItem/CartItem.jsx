import styles from "./cartItem.module.css"
import { CartContext } from "../../context/Cart";
import { useContext } from "react";

export default function CartItem({dish, title, image, size, price, quantity}) {
    
    const {addToCart, removeFromCart} = useContext(CartContext)

    return (
      <div className={styles.itemCard}>
        <div className={styles.qtyNname}>
          <p>{quantity} X</p>
          <img src={image} alt={title} />
          <p>{title}</p>
        </div>
        {size === "family" && (
          <div className={styles.cardInfo}>
            <p className={styles.infoTitle}>Størrelse:</p>
            <p>Familie</p>
          </div>
        )}
        <div className={styles.cardInfo}>
            <p className={styles.infoTitle}>Pris:</p>
            <p>{price},-</p>
        </div>
        <div className={styles.cardInfo}>
            <button onClick={() => addToCart(dish)}>+</button>
            <button onClick={() => removeFromCart(dish)}>-</button>
        </div>
      </div>
    );

}