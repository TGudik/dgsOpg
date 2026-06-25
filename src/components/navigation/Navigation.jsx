import { Link } from "react-router-dom"
import styles from "./navigation.module.css"
import logo from "../../assets/logo.png"
import basketIcon from "../../assets/basket_icon.png"
import { useContext, useState } from "react"
import { CartContext } from "../../context/Cart"
import Hamburger from "hamburger-react"
import { NavLink } from "react-router-dom"


export default function Navigation() {
    const [isOpen, setOpen] = useState(false)

    const { cartItems } = useContext(CartContext)

    function closeMenu() {
        setOpen(false)
    }

    return (
      <div className={styles.navWrapper}>
        <NavLink to="/">
          <img src={logo} alt="DGS Logo" />
        </NavLink>
        <div className={styles.navRight}>
          <Link to="/cart">
            <div className={styles.basketNcount}>
              <img className={styles.basketBtn} src={basketIcon} alt="Kurv" />
              <p className={styles.count}>{cartItems.length}</p>
            </div>
          </Link>
          <div className={styles.burger}>
            <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} size={30}/>
          </div>
          <ul onClick={closeMenu} className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
            <li>
              <NavLink className={styles.navLink} to="/" onClick={closeMenu}>
                Forside
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navLink} to="/employees" onClick={closeMenu}>
                Personalet
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navLink} to="/contact" onClick={closeMenu}>
                Kontakt
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navLink} to="/cart" onClick={closeMenu}>
                Kurv
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );

}