import styles from "./employee.module.css"
import { useFetchEmployees } from "../../hooks/useFetchEmployees"

export default function Employee({setEmpToUpd, emp, id, name, position, img, bo}) {
    const {removeEmpById} = useFetchEmployees()

    /* funktion fra useState så andet komponent får at vide hvilken ansat skal ændres i backoffice */
    return(
        <div className={styles.empWrapper}>
            <img src={img} alt={name} className={styles.empImg}/>
            <h3 className={styles.empName}>{name}</h3>
            <h4 className={styles.empPosition}>{position}</h4>
            {bo && (
                <div style={{display: "flex", gap: 10}}>
                    <button onClick={() => setEmpToUpd(emp)}>update</button>
                    <button onClick={() => removeEmpById(id)}>delete</button>
                </div>
            )}
        </div>
    )
}