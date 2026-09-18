import { useRevalidator } from "react-router-dom";
import Swal from "sweetalert2";

export function useFetchDishes() {
    const apiUrl = "http://localhost:3042/dish"

    async function getDishById(id) {
            const res = await fetch(`${apiUrl}/${id}`)
            if (!res.ok) throw new Response("Kunne ikke finde retten ud fra ID'et", {status: res.status})
            const preData = res.json()
            const data = preData.data
            return data
    }

    return {
        getDishById
    }   
 
}