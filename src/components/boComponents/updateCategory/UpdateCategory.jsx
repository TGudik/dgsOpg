import styles from "./updateCategory.module.css";
import { useState, useEffect } from "react";
import { useFetchCategories } from "../../../hooks/useFetchCategories";
import { useLoaderData, useRevalidator } from "react-router-dom";

export default function UpdateCategory({
  selectedCategory,
  setSelectedCategory,
}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const { updateCategoryById, addCategory, removeCatById } = useFetchCategories();
  const categories = useLoaderData();
  const { revalidate } = useRevalidator();
  const category = categories.find((cat) => cat.name === selectedCategory);

  useEffect(() => {
    /* ingen valgt kategori = tom formular til oprettelse */
    if (!selectedCategory) {
      setIsEditing(false);
      setName("");
      setImage(null);
      return;
    }

    if (!category) return;

    setIsEditing(true);
    setName(category.name);
    setImage(null);
  }, [selectedCategory, categories]);

  function showMessage() {
    setMessage(true);
    setTimeout(() => setMessage(false), 3000);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    if (image) formData.append("file", image);

    if (isEditing) {
      const category = categories.find((cat) => cat.name === selectedCategory);
      formData.append("id", category._id);
      await updateCategoryById(formData);
    } else {
      await addCategory(formData);
    }

    /* rydder hele formularen, inkl. filfeltet */
    e.target.reset();
    setName("");
    setImage(null);
    setIsEditing(false);
    revalidate();
    showMessage();
    setSelectedCategory(null);
  }

  return (
    <div>
      <h3>{isEditing ? "Opdater kategori" : "Tilføj ny kategori"}</h3>

      <form className={styles.categoryForm} onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Navn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0] ?? null)}
        />
        <button>{isEditing ? "Opdater kategori" : "Tilføj kategori"}</button>
      </form>

      {isEditing && (
        <div>
            <button type="button" onClick={() => setSelectedCategory(null)}>
              Annuller
            </button>
            <button onClick={() => {
                removeCatById(category._id) 
                showMessage()}}>
                Slet kategori
            </button>
        </div>

      )}

      {message && <p>Succes</p>}
    </div>
  );
}
