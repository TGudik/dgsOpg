import { useEffect, useState } from "react"
import { employeesLoader } from "../../loaders/DataLoaders"
import styles from "./updateEmployee.module.css";
import { useFetchEmployees } from "../../hooks/useFetchEmployees";
import { useRevalidator } from "react-router-dom";

export default function UpdateEmployee({empToUpd}) {
    /* Usestate variabler */
    const [name, setName] = useState("")
    const [image, setImage] = useState(null)
    const [position, setPosition] = useState("")
    const [message, setMessage] = useState(false)

    /* Henter funktion*/
    const { updateEmployeeById } = useFetchEmployees() 

    /* henter revalidate, som gør listen med ansatte genindlæser når kaldt */
    const { revalidate } = useRevalidator()

    /* sætter værdi af state til hvad der er givet til komponent som prop */
    useEffect(() => {
        if (!empToUpd) return

        setName(empToUpd.name)
        setImage(empToUpd.image)
        setPosition(empToUpd.position)
    }, [empToUpd])

    /* skjuler form hvis intet er valgt */
    if (!empToUpd) return <p>Vælg en ansat at opdatere</p>

    function showSuccess() {
        setMessage(true)

        setTimeout(() => {
            setMessage(false)
        }, 3000);
    }


    async function handleSubmit(e) {
        /* stopper genindlæsning ved submit */
        e.preventDefault()

        /* formData bruges til at sende i fetch body */
        const formData = new FormData()
        formData.append("id", empToUpd._id)
        formData.append("name", name)
        formData.append("file", image)
        formData.append("position", position)

        await updateEmployeeById(formData)

        /* reset efter submit */
        setName("")
        setImage("")
        setPosition("")
        revalidate()
        showSuccess()
        empToUpd = null

    }


    return(
        <form className={styles.empForm} onSubmit={handleSubmit}>
            <input required type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input required type="file" accept="image/" onChange={(e) => setImage(e.target.files[0])}/>
            <input required type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)}/>
            <button>Opdater Ansat</button>
            {message && <p>ansat blev opdateret</p>}
        </form>
    )

}