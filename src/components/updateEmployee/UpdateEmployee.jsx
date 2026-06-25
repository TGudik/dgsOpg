import { useEffect, useState } from "react"
import { employeesLoader } from "../../loaders/DataLoaders"
import styles from "./updateEmployee.module.css";
import { useFetchEmployees } from "../../hooks/useFetchEmployees";
import { useRevalidator } from "react-router-dom";

export default function UpdateEmployee({empToUpd}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState(null)
    const [position, setPosition] = useState("")
    const [message, setMessage] = useState(false)
    const { updateEmployeeById } = useFetchEmployees() 
    const { revalidate } = useRevalidator()

    useEffect(() => {
        if (!empToUpd) return

        setName(empToUpd.name)
        setImage(empToUpd.image)
        setPosition(empToUpd.position)
    }, [empToUpd])

    if (!empToUpd) return <p>Vælg en ansat at opdatere</p>

    function showSuccess() {
        setMessage(true)

        setTimeout(() => {
            setMessage(false)
        }, 3000);
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append("id", empToUpd._id)
        formData.append("name", name)
        formData.append("file", image)
        formData.append("position", position)

        await updateEmployeeById(formData)

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