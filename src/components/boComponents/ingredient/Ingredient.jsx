import styles from "./ingredient.module.css"
import { useFetchIngredients } from "../../../hooks/useFetchIngredients"

export default function Ingredient({ingredient, setCurrentIngredient}) {

    const { removeIngById } = useFetchIngredients()

    return (
        <div className={styles.ingWrapper}>
            <h2 className={styles.ingName}>{ingredient.name}</h2>
            <button onClick={() => setCurrentIngredient(ingredient)} className={styles.ingBtn}>Opdater</button>
            <button onClick={() => removeIngById(ingredient._id)} className={styles.ingBtn}>Slet</button>
        </div>
    )

}