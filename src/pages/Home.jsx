import { useEffect, useState } from "react";
import Categories from "../components/categories/Categories";
import Welcome from "../components/welcome/Welcome";
import { useLoaderData } from "react-router-dom";
import Dishes from "../components/dishes/Dishes";


export default function Home() {
    /* variabel oprettet til at kunne prop drille usestate-funktionen til categories komponent og variablet til at filtrere i dishes komponent*/
    const [selectedCategory, setSelectedCategory] = useState(null)

    const {categories, dishes} = useLoaderData()


    return (
      <div>
        <Welcome
          title="Velkommen til den glade skorpe"
          text={`Hos os handler det om den perfekte pizza med den sprødeste skorpe. Vi
          bruger kun de bedste råvarer til både klassiske favoritter og
          spændende specialiteter som "Parma Drama" og "Rabbit Royale". Uanset
          om du er til en lille, personlig pizza eller en stor familiedeling, så
          finder du det hos os. Kom forbi og nyd en pizza lavet med kærlighed,
          eller bestil den, hent den og nyd den derhjemme!`}
        />
        <Categories
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          categories={categories}
        />
        <Dishes dishes={dishes} selectedCategory={selectedCategory} />
      </div>
    );

}