import React from "react";
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");
    // console.log(onNewCategory)

    const onInputChange = ({ target }) => {
        // console.log(target.value); // imprime cada vez que cambia el input
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        // console.log(event); // se imprime al dar enter. Imprime al evento en sí
        // * preventDefault =>  para que no se actualice el dom luego de dar enter:
        event.preventDefault();
        // console.log(inputValue); // imprime cada vez que se da enter

        if (inputValue.trim().length <= 1) return;
        // después de dar enter, el inputValue va a ser un string vacío
        setInputValue("");
        onNewCategory(inputValue.trim());
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};
