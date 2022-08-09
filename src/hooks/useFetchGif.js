import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsLoading(false);
    };

    // ! useEffect => qué sucede después de un evento:
    useEffect(() => {
        getImages();
    }, []);
    
    return {
        images: images,
        isLoading: isLoading,
    };
};
