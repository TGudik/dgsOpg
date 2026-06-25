import { useRevalidator } from "react-router-dom";

export function useFetchEmployees() {
    const apiUrl = `http://localhost:3042/employee`;
    const { revalidate } = useRevalidator()

    async function removeEmpById(id) {
        try {
            const res = await fetch(`${apiUrl}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()
            console.log(data)
            revalidate();
        } catch (error) {
            console.error("fejl i at slette medarbejder", error)
        }
    }

    async function addEmployee(formData) {
        try {
            const res = await fetch(`${apiUrl}`, {
                method: "POST",
                body: formData
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    async function updateEmployeeById(formData) {
        try {
            const res = await fetch(`${apiUrl}`, {
                method: "PUT",
                body: formData
            })

            const data = await res.json()
            console.log(data)

        } catch (error) {
            console.error(error)
        }
    }

    return {
        removeEmpById,
        addEmployee,
        updateEmployeeById
    }

}