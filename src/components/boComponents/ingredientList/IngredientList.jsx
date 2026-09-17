import { useState } from "react"
import styles from "./ingredientList.module.css"
import { useLoaderData } from "react-router-dom"
import Ingredient from "../ingredient/Ingredient"

export default function IngredientList({setCurrentIngredient}) {
    const ingredients = useLoaderData()

    return (
        <div className={styles.listWrapper}>
            {ingredients.map((ing) => {
                return (
                    <Ingredient key={ing._id} ingredient={ing} setCurrentIngredient={setCurrentIngredient}/>
                )
            })}
        </div>
    )

}