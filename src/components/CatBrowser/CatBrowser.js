import styled from 'styled-components'
import CatGrid from '../CatGrid';
import Typography from '@mui/material/Typography';

// dropdown
import { useState, useCallback } from "react";
import useBreeds from '../../utils/useBreeds'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Button from '@mui/material/Button';

const Wrapper = styled.div`
    padding: 72px;
    min-height: 100vh;
    text-align: center;
`;

const Header = styled.div`
    margin-bottom: 36px;
`;

const FilterWrapper = styled.div`
    max-width: 360px;
    margin: 36px auto;
`;

function CatBrowser() {
    const breeds = useBreeds();
    const breedDetails = [];
    const [searchPage, setSearchPage] = useState(1);
    const [selectedBreedId, setSelectedBreedId] = useState("");

    for (const curr of breeds) {
        const { id, name } = curr;
        breedDetails.push({id, name});
    }

    const handleChange = useCallback(
        (event) => {
            setSearchPage(1);
            if (selectedBreedId === "" || selectedBreedId !== event.target.value) {
                setSelectedBreedId(event.target.value);
            }
        },
        [selectedBreedId]
    );
    
    const handleLoadMore = () => {
        setSearchPage(searchPage+1);
    };

    return (
        <Wrapper>  
            <Header>
                <Typography variant="h3">猫 Iring</Typography>
            </Header>
            <FilterWrapper>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">Breed</InputLabel>
                    <Select 
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={handleChange}
                        label="Breed"
                        value={selectedBreedId ?? ""}
                    >
                    { 
                        breedDetails && breedDetails.map((breed) => (
                            <MenuItem value={breed.id} key={breed.id}>{breed.name}</MenuItem>
                        ))
                    }
                    </Select>
                </FormControl>
            </FilterWrapper>
            <CatGrid page={searchPage} breedId={selectedBreedId} />
            <Button variant="contained" onClick={handleLoadMore}>Load More</Button>
        </Wrapper>
    );
}
  
export default CatBrowser;