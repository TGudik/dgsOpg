import styles from "./orderList.module.css"
import { useLoaderData } from "react-router-dom"

export default function OrderList() {
    
    const { orders, dishes} = useLoaderData()

    console.log(orders)

    function formatTime(string) {
        const date = new Date(string)

        const formatted = date.toLocaleString("da-DK", {
            day: "numeric",
            month: "short",
            hour: "numeric",
            minute: "2-digit"
        })

        return formatted
    }

    function getDishName(id) {
        const dish = dishes.find((d) => d._id === id)
        return dish?.title
    }

    return (
        <div className={styles.listWrapper}>
            {orders.map((order) => {
                return (
                    <div key={order._id} className={styles.listItem}>
                        <p>{formatTime(order.created)}</p>
                        <div className={styles.orderDishes}>
                            {order.dishes.map((dish) => {
                                return (
                                  <div key={dish.dish}>
                                    <p>{getDishName(dish.dish)}</p>
                                    <p><b>Mængde:</b> {dish.amount}</p>
                                    <p><b>Størrelse:</b> {dish.size}</p>
                                    <p><b>Ekstra:</b> {dish.extraIngredients.map((ing) => <p>{ing}</p>)}</p>
                                  </div>
                                );
                            })}
                        </div>
                        <div className={styles.delivered}>
                            <p>Afsendt:</p>
                            <p>{order.shipped ? "Ja" : "Nej"}</p>
                        </div>
                        <div className={styles.comment}>
                            <p>Kommentar:</p>
                            <p>{order.comment}</p>
                        </div>
                        <div className={styles.totalPrice}>
                            <p>Pris:</p>
                            <p>{order.totalPrice}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}