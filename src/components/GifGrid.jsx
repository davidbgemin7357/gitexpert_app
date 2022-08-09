import React from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGif(category);
    return (
        <>
            <h3>{category}</h3>
            {
                /* si isLoading es true mostrará el h2 cargando */
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map((image) => {
                        return (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                        )
                    })
                }
            </div>
        </>
    );
};
