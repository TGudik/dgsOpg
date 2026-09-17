import { useLoaderData } from "react-router-dom"
import styles from "./boCatList.module.css"
import Category from "../../category/Category"

export default function BoCatList({ selectedCategory, setSelectedCategory }) {

    const categories = useLoaderData()

    return (
        <div className={styles.listWrapper}>
            {categories.map((cat) => {
                return (
                    <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} bo img={cat.image} name={cat.name} key={cat._id} />
                )
            })}
        </div>
    )
    
}