import { useLoaderData } from "react-router-dom"
import DishDetails from "../components/dishDetails/DishDetails"

export default function Dish() {
    const dish = useLoaderData()

    console.log(dish)

    return(
        <DishDetails dish={dish}/>
    )
}