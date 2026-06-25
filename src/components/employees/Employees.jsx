import { useLoaderData } from "react-router-dom"
import styles from "./employees.module.css"
import Employee from "../employee/Employee"

export default function Employees({data}) {
    
    const employees = data

    return(
        <div className={styles.gridWrapper}>
            {/* mapper alle employees */}
            {employees.map((employee) => {
                return(
                    <Employee
                    key={employee._id}
                    img={employee.image}
                    name={employee.name}
                    position={employee.position}
                    />
                )
            })}
        </div>
    )
}