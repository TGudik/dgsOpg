import { Link } from "react-router-dom"
import styles from "./dish.module.css"

export default function Dish({id, img, name}) {

    return (
        <Link to={`/dish/${id}`}>
            <div className={styles.dishWrapper}>
                <img className={styles.dishImg} src={img} alt={name} />
                <div className={styles.dishOverlay}></div>
                <h3 className={styles.dishName}>{name}</h3>
            </div>
        </Link>
    )

}