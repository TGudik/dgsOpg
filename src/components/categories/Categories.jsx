import Category from "../category/Category"
import styles from "./categories.module.css"


export default function Categories({selectedCategory, setSelectedCategory, categories}) {

    /* sender props videre til enkelte kategorier */
    return(
        <div className={styles.wrapper}>
            <h3 className={styles.categoriesTitle}>Vælg kategori</h3>
            <div className={styles.catWrapper}>
                {categories.map((category) => {
                    return (
                        <Category 
                          setSelectedCategory={setSelectedCategory}
                          selectedCategory={selectedCategory} 
                          key={category._id}
                          img={category.image} 
                          name={category.name}
                          />
                    )
                })}
            </div>
        </div>
    )

}