import { useLoaderData } from "react-router-dom"
import styles from "./baOfEmpList.module.css"
import Employee from "../employee/Employee"

export default function BaOfEmpList({setEmpToUpd}) {
    const employees = useLoaderData()

    return(
        <div className={styles.empWrapper}>
            {employees.map((employee) => {
                return (
                    <Employee
                        key={employee._id}
                        emp={employee}
                        id={employee._id}
                        img={employee.image}
                        name={employee.name}
                        position={employee.position}
                        setEmpToUpd={setEmpToUpd}
                        bo
                    />
                )
            })}
        </div>
    )

}