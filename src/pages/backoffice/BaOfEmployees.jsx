import AddEmployee from "../../components/boComponents/addEmployee/AddEmployee";
import BaOfEmpList from "../../components/boComponents/baOfEmpList/BaOfEmpList";
import UpdateEmployee from "../../components/boComponents/updateEmployee/UpdateEmployee";
import { useState } from "react";

export default function BaOfEmployees() {
  /* sender usestate funktion og variabel med prop drilling til relevante komponenter */
  const [empToUpd, setEmpToUpd] = useState(null);

  return (
    <div>
      <BaOfEmpList setEmpToUpd={setEmpToUpd} />
      <UpdateEmployee empToUpd={empToUpd} />
      <AddEmployee />
    </div>
  );
}
