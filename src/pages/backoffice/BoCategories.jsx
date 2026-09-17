import BoCatList from "../../components/boComponents/boCatList/BoCatList";
import { useState } from "react";
import UpdateCategory from "../../components/boComponents/updateCategory/UpdateCategory";


export default function BoCategories() {
    const [selectedCategory, setSelectedCategory] = useState(null)

    return (
      <div>
        <BoCatList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <UpdateCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    );

}