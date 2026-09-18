import { Link } from "react-router-dom"
import styles from "./boOverview.module.css"

export default function BoOverview() {

    return (
        <div className={styles.btnWrapper}>
            <Link className={styles.navBtn} to="employees">Ansatte</Link>
            <Link className={styles.navBtn} to="categories">Kategorier</Link>
            <Link className={styles.navBtn} to="ingredients">Ingredienser</Link>
            <Link className={styles.navBtn} to="orders">Ordrer</Link>
            <Link className={styles.navBtn} to="messages">beskeder</Link>
        </div>
    )

}