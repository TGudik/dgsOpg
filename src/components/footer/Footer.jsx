import styles from "./footer.module.css"
import logo from "../../assets/logo.png"

export default function Footer() {

    return(
        <div className={styles.footerWrapper}>
            <img src={logo} alt="Logo" className={styles.footerLogo}/>
            <div className={styles.footerInfo}>
                <p>Email: gladskorpe@pizzaglad.dk</p>
                <p>Tlf: 12345678</p>
                <p>Adresse: Skorpevej 42, 1234 Pizzabyen</p>
            </div>
        </div>
    )

}