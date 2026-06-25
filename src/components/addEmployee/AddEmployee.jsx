import { useState } from "react"
import { useFetchEmployees } from "../../hooks/useFetchEmployees"
import styles from "./addEmployee.module.css"
import { useRevalidator } from "react-router-dom"

export default function AddEmployee() {
    const [name, setName] = useState("")
    const [image, setImage] = useState(null)
    const [position, setPosition] = useState("")
    const [message, setMessage] = useState(false)
    
    const { revalidate } = useRevalidator()
    const { addEmployee } = useFetchEmployees() 

    function showSuccess() {
        setMessage(true)

        setTimeout(() => {
            setMessage(false)
        }, 3000);
    }

    function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append("name", name)
        formData.append("position", position)
        formData.append("file", image)

        addEmployee(formData)

        setName("")
        setImage(null)
        setPosition("")

        showSuccess()
        revalidate()

    }


    return(
        <form className={styles.empForm} onSubmit={handleSubmit}>
            <input required type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input required type="file" accept="image/" placeholder="Image" onChange={(e) => setImage(e.target.files[0])}/>
            <input required type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)}/>
            <button>Tilføj Ansat</button>
            {message && <p>ansat blev tilføjet</p>}
        </form>
    )

}