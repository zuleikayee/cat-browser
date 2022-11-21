import { useEffect, useState } from "react";
import axios from 'axios';

export default function useCatImages(
    {
        page = 1,
        limit = 8,
        breedId
    }
) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (breedId !== '') {
            const apiURL = `https://api.thecatapi.com/v1/images/search?page=${page}&limit=${limit}&breed_id=${breedId}`;
            
            axios.get(apiURL).then((response) => {
                setImages(response.data);
            });
        }
    }, [breedId, limit, page]);

    return images;
}