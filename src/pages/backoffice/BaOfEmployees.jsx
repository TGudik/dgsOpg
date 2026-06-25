import AddEmployee from "../../components/addEmployee/AddEmployee";
import BaOfEmpList from "../../components/baOfEmpList/BaOfEmpList";
import UpdateEmployee from "../../components/updateEmployee/UpdateEmployee";
import { useState } from "react";

export default function BaOfEmployees() {
    const [empToUpd, setEmpToUpd] = useState(null) 

    return(
        <div>
            <BaOfEmpList setEmpToUpd={setEmpToUpd}/>
            <UpdateEmployee empToUpd={empToUpd}/>
            <AddEmployee />
        </div>
    )
}