import { useRevalidator } from "react-router-dom";
import Swal from "sweetalert2";

/* returnerer funktioner som bruges til put, delete og post methods */
export function useFetchIngredients() {
  const apiUrl = `http://localhost:3042/ingredient`;
  /* revalidate opdatere data når listen ændre sig, det fungerer sammen med dataloader */
  const { revalidate } = useRevalidator();

  async function removeIngById(id) {
    const result = await Swal.fire({
      icon: "warning",
      title: "Er du sikker?",
      showCancelButton: true,
      confirmButtonText: "Ja, slet",
    });
    if (!result.isConfirmed) return;
    try {
      const res = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      revalidate();
    } catch (error) {
      console.error("fejl i at slette ingrediens", error);
    }
  }

  async function addIngredient(formData) {
    try {
      const res = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function updateIngById(formData) {
    try {
      const res = await fetch(`${apiUrl}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    removeIngById,
    addIngredient,
    updateIngById,
  };
}
