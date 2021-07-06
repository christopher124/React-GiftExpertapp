import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["rick"]);

  // const handleAdd = () => {
  //   // setCategories(["HunterXHunter",...categories ]);
  //   setCategories((cats) => [...cats, "HunterXHunter"]);
  // };

  return (
    <div>
      <h1>Buscador de Gifs</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
