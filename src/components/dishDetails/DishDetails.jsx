import styles from "./dishDetails.module.css" 
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/Cart"

export default function DishDetails({dish}) {
    const [size, setSize] = useState("normal")

    /* henter fra context */
    const { cartItems, addToCart } = useContext(CartContext)

    console.log(cartItems)

    return (
      <div className={styles.dishDetailsWrapper}>
        <img src={dish.image} alt={dish.title} className={styles.dishImage} />
        <div className={styles.dishInfoWrapper}>
          <h2 className={styles.dishTitle}>{dish.title}</h2>
          <div className={styles.ingredients}>
            {dish.ingredients.map((ingredient) => {
              return <p key={ingredient} className={styles.ingredient}>{ingredient}</p>;
            })}
          </div>
        </div>
        <div className={styles.sizeWrapper}>
          <h3 className={styles.sizeTitle}>Vælg Størrelse</h3>
          <select
            className={styles.sizeSelect}
            onChange={(e) => setSize(e.target.value)}
            name="size"
            defaultValue="normal"
          >
            <option className={styles.sizeOption} value="normal">
              Almindelig
            </option>
            <option className={styles.sizeOption} value="family">
              Familie
            </option>
          </select>
        </div>
        <div className={styles.priceWrapper}>
          <h3 className={styles.priceTitle}>Pris</h3>
          <p className={styles.price}>
            {size === "normal" ? dish.price.normal : dish.price.family}
          </p>
        </div>
        <button onClick={() => {
            /* tilføjer pris til dish og vælger den tilsvarende størrelses pris inden det sendes til kurv */
            addToCart({...dish, size: size, price: size === "normal" ? dish.price.normal : dish.price.family})
        }} 
        className={styles.addToCartBtn}>{`Tilføj ${dish.title} til kurven`}</button>
      </div>
    );

}