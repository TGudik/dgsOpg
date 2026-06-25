import { useEffect, useState } from "react"
import Dish from "../dish/Dish"
import styles from "./dishes.module.css"

/* bruger prop drilling til at modtage den valgte kategori fra category component */
export default function Dishes({dishes, selectedCategory}) {
    const [filteredDishes, setFilteredDishes] = useState([])

    /* Funktion der returnere filtrerede retter */
    function filterDishes(dishes) {
        if (selectedCategory === null) return dishes

        return dishes.filter((dish) => dish.category === selectedCategory)

    }

    /* useEffect lytter efter opdateringer til selectedCategory og opdatere filteredDishes ved ændring */
    useEffect(() => {
        setFilteredDishes(filterDishes(dishes))
    }, [selectedCategory])

    return(
        <div className={styles.allDishesWrapper}>
            {selectedCategory === null ? "" : <h3 className={styles.dishesCategoryTitle}>Alle vores {selectedCategory}</h3>}
            <div className={styles.dishesWrapper}>
                {filteredDishes.map((dish) => {
                    return(
                        <Dish
                          key={dish._id}
                          id={dish._id}
                          img={dish.image}
                          name={dish.title}
                        />
                    )
                })}
            </div>
        </div>
    )

}