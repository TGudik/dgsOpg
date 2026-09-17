import { useState } from "react";
import IngredientList from "../../components/boComponents/ingredientList/IngredientList";
import AddUpdateIngredient from "../../components/boComponents/addUpdateIngredient/AddUpdateIngredient";


export default function BoIngredients() {
    const [currentIngredient, setCurrentIngredient] = useState(null)

    return (
        <div>
            <AddUpdateIngredient setCurrentIngredient={setCurrentIngredient} currentIngredient={currentIngredient}/>
            <IngredientList setCurrentIngredient={setCurrentIngredient}/>
            
        </div>
    )

}