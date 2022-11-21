import { useEffect, useState } from "react";
import axios from 'axios';

export default function useBreeds() {
    const apiURL = "https://api.thecatapi.com/v1/breeds";
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        axios.get(apiURL).then((response) => {
            setBreeds(response.data);
        });
    }, []);

    return breeds;
}