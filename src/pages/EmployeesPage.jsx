import { useLoaderData } from "react-router-dom";
import Employees from "../components/employees/Employees";
import Welcome from "../components/welcome/Welcome";


export default function EmployeesPage() {

    const data = useLoaderData()

    return (
        <div>
            <Welcome title={`Personalet hos Den Glade Skorpe`} text={`Hos Den Glade Skorpe har vi et dedikeret og venligt personale, der altid går den ekstra mil for at sikre, at kunderne får den bedste oplevelse. Teamet består af erfarne pizzabagere, der med passion tilbereder lækre pizzaer med friske råvarer.`} />
            <Employees data={data}/>
        </div>
    )

}