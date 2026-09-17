import BoCatList from "../../components/boComponents/boCatList/BoCatList";
import { useState } from "react";
import AddUpdateCategory from "../../components/boComponents/updateCategory/AddUpdateCategory";


export default function BoCategories() {
    const [selectedCategory, setSelectedCategory] = useState(null)

    return (
      <div>
        <BoCatList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <AddUpdateCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    );

}