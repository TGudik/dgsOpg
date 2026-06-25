import styles from "./cartComp.module.css"
import { useContext, useState } from "react"
import { CartContext } from "../../context/Cart"
import CartItem from "../cartItem/CartItem"
import { useFetchOrders } from "../../hooks/useFetchOrders"
import { Link } from "react-router-dom"

export default function CartComp() {
    /* henter funktioner fra context */
    const { cartItems, addToCart, removeFromCart, getCartTotal, clearCart } = useContext(CartContext)
    /* funktion til at sende til server */
    const { sendNewOrder } = useFetchOrders()
    /* useStates */
    const [comment, setComment] = useState("")
    const [show, setShow] = useState(false)


    function showSuccess() {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
    
    async function handleSubmit(e) {
        e.preventDefault()

        /* server forventer et punkt navngivet dish, som er dishens id */
        const body = {
            dishes: cartItems.map(item => ({
                ...item, 
                dish: item._id
            })),
            comment: comment,
            totalPrice: getCartTotal()
        }

        await sendNewOrder(body)
        
        /* resetter kurv når sendt */
        setComment("")
        showSuccess()
        clearCart()

    }

    return(
        <div>
            <div className={`${styles.successScreen} ${show && styles.shown}`}>
                <div className={styles.successOverlay}></div>
                <div className={styles.successMessage}>
                    <h3 className={styles.successText}>Tak for din bestilling!</h3>
                </div>
            </div>
            <h2 className={styles.cartTitle}>Bestilling</h2>
            <div className={styles.displayCartItems}>
                {cartItems.map((item) => {
                    return(
                        <CartItem
                          key={item._id}
                          dish={item}
                          title={item.title}
                          image={item.image}
                          size={item.size}
                          price={item.price}
                          quantity={item.quantity}
                        />
                    )
                })}
                {cartItems.length === 0 && (
                    <div className={styles.emptyCartMsg}>
                        <p>Ingen pizza i kurven</p>
                        <Link to="/">
                        <button>Gå til forsiden</button>
                        </Link>
                    </div>
                )}
            </div>
            <p className={styles.totalPrice}>I alt: {getCartTotal()}kr.</p>
            <form className={styles.commentNsubmit} onSubmit={handleSubmit}>
                <textarea placeholder="Kommentarer til ordren" rows={6} value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <button>Afgiv Ordrer</button>
            </form>
        </div>
    )

}