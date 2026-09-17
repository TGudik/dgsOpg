import { useRevalidator } from "react-router-dom";
import Swal from "sweetalert2";

/* returnerer funktioner som bruges til put, delete og post methods */
export function useFetchCategories() {
  const apiUrl = `http://localhost:3042/category`;
  /* revalidate opdatere data når listen ændre sig, det fungerer sammen med dataloader */
  const { revalidate } = useRevalidator();

  async function removeCatById(id) {
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
      console.error("fejl i at slette medarbejder", error);
    }
  }

  async function addCategory(formData) {
    try {
      const res = await fetch(`${apiUrl}`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function updateCategoryById(formData) {
    try {
      const res = await fetch(`${apiUrl}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    removeCatById,
    addCategory,
    updateCategoryById,
  };
}
