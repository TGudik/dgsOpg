import styles from "./category.module.css"

/* modtager useState funktion setSelectedCategory med prop drilling fra homepage */
export default function Category({selectedCategory, setSelectedCategory, img, name}) {

    /* enten filtrer efter kategori, eller fjern filter hvis man klikker på samme kategori igen */
    function handleClick(name) {
        if (selectedCategory === name) {
            setSelectedCategory(null)
        } else {
            setSelectedCategory(name)
        }
    }

    return (
        <div onClick={() => handleClick(name)} className={styles.categoryWrapper}>
            <img className={styles.categoryImg} src={img} alt={name} />
            <div className={styles.catOverlay}></div>
            <h3 className={styles.categoryName}>{name}</h3>
        </div>
    )

}