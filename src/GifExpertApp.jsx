import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";

export const GifExpertApp = () => {
    // const [categories, setCategories] = useState(["One Punch"]);
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        // ! NO USAR PUSH:

        // * 1ra forma:
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);

        // * 2da forma:
        // setCategories((cat) => [...cat, "Valorant"]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* input: */}
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />

            {/* listado de gifs */}
            {/* cada vez que se use un map, debe usarse un key: */}
            {categories.map((category) => {
                return <GifGrid key={category} category={category} />;
            })}
        </>
    );
};
