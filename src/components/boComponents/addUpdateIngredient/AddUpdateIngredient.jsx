import { useEffect, useState } from "react"
import styles from "./addUpdateIngredient.module.css"
import { useFetchIngredients } from "../../../hooks/useFetchIngredients"
import { useRevalidator } from "react-router-dom"

export default function AddUpdateIngredient({setCurrentIngredient, currentIngredient}) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [isEditing, setIsEditing] = useState(false)
    const [message, setMessage] = useState(false)
    
    const { revalidate } = useRevalidator()

    const { updateIngById, addIngredient } = useFetchIngredients()

    useEffect(() => {
    if (!currentIngredient) {
        setIsEditing(false)
        setName("")
        setDescription("")
        return
    }
    setIsEditing(true)
    setName(currentIngredient.name)
    setDescription(currentIngredient.description)

    }, [currentIngredient])

    function showMessage() {
        setMessage(true)
        setTimeout(() => setMessage(false), 3000)
    }

    async function handleSubmit(e) {
        e.preventDefault()

        let formData

        formData = {...formData, name: name}
        formData = {...formData, description: description}

        if (isEditing) {
            formData = {...formData, id: currentIngredient._id}
            console.log(formData)
            await updateIngById(formData)
        } else {
            await addIngredient(formData)
        }

        e.target.reset();
        setName("");
        setDescription("");
        setIsEditing(false);
        revalidate();
        showMessage();
        setCurrentIngredient(null);
    }

    return (
        <div>
            <h3>{isEditing ? "Opdater ingrediens" : "Tilføj ingrediens"}</h3>
            <form onSubmit={handleSubmit} className={styles.ingForm}>
                <input type="text" placeholder="Navn" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Beskrivelse" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">{isEditing ? "Opdater" : "Tilføj"}</button>
            </form>
            {isEditing && <button onClick={() => setCurrentIngredient(null)}>Annuler</button>}
            {message && <p>Succes</p>}
        </div>
    )

}