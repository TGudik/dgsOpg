import styles from "./hero.module.css"
import heroImg from "../../assets/headerImg.png"

export default function Hero() {

    return(
        <div className={styles.heroWrapper}>
            <img className={styles.heroImg} src={heroImg} alt="Den glade skorpe" />
            <div className={styles.overlay}></div>
            <div className={styles.heroTitle}>
                <p className={styles.den}>DEN</p>
                <p className={styles.glade}>GLADE</p>
                <p className={styles.skorpe}>SKORPE</p>
            </div>
        </div>
    )

}