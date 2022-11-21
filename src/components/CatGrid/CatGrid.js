import styled from 'styled-components';
import useCatImages from '../../utils/useCatImages';
import { styled as muiStyled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Wrapper = styled.div`
    margin: 56px;
`;

const Item = muiStyled(Paper)(({ theme }) => ({
    backgroundColor: '#ebebe9',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CatImage = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const LoadMoreButton = muiStyled(Button)(({ theme }) => ({
    color: '#333',
    borderColor: '#111',
    textAlign: 'center',
    marginTop: '16px',
    width: '100%',
}));

function CatGrid({
    ...searchParams
}) {
    const searchResults = useCatImages(searchParams);

    return (
        <Wrapper>
            <Grid container spacing={4}>
                {
                    searchResults.map((cat) => (
                        <Grid item xs={8} md={3} key={cat.id}>
                            <Item>
                                <CatImage src={cat.url} alt={""}></CatImage>
                                <LoadMoreButton variant="outlined">View Details</LoadMoreButton>
                            </Item>
                        </Grid>
                    ))
                }
            </Grid>
        </Wrapper>
    );
}
  
export default CatGrid;