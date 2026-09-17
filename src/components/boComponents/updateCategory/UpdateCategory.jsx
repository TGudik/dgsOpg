import styles from "./updateCategory.module.css"
import { useState, useEffect } from "react";
import { useFetchCategories } from "../../../hooks/useFetchCategories";
import { useLoaderData } from "react-router-dom";
import { useRevalidator } from "react-router-dom";

export default function UpdateCategory({ selectedCategory, setSelectedCategory }) {
  /* Usestate variabler */
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(false);

  /* Henter funktion*/
  const { updateCategoryById } = useFetchCategories()
  const categories = useLoaderData()

  /* henter revalidate, som gør listen med ansatte genindlæser når kaldt */
  const { revalidate } = useRevalidator();

  /* sætter værdi af state til hvad der er givet til komponent som prop */
  useEffect(() => {
    if (!selectedCategory) return;
    const category = categories.filter((cat) => cat.name === selectedCategory)[0]
    setName(category.name);
    setImage(category.image);
  }, [selectedCategory]);


  function showSuccess() {
    setMessage(true);

    setTimeout(() => {
      setMessage(false);
    }, 3000);
  }

  async function handleSubmit(e) {
    /* stopper genindlæsning ved submit */
    e.preventDefault();

    const category = categories.filter((cat) => cat.name === selectedCategory)[0]

    /* formData bruges til at sende i fetch body */
    const formData = new FormData();
    formData.append("id", category._id);
    formData.append("name", name);
    formData.append("file", image);

    await updateCategoryById(formData);

    /* reset efter submit */
    setName("");
    setImage("");
    revalidate();
    showSuccess();
    setSelectedCategory(null)
  }

  return (
    <div>
      {!selectedCategory && <p>Vælg en ansat at opdatere</p>}
      {selectedCategory && (
        <form className={styles.categoryForm} onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="file"
            accept="image/"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button>Opdater Kategori</button>
        </form>
      )}
      {message && <p>Kategori blev opdateret</p>}
    </div>
  );
}