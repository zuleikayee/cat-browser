import './App.css';
import useApiData from './utils/useApiData';
import DropdownMenu from './components/DropdownMenu/DropdownMenu';
import Grid from './components/Grid/Grid';
import Button from '@mui/material/Button';

function App() {  
  const breeds = useApiData();
  const breedNameArr = [];

  for (const curr of breeds) {
    const { name } = curr;
    breedNameArr.push(name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cat Browser</h1>
        <DropdownMenu />
        <Grid />
        <Button variant="contained">Load More</Button>
      </header>
    </div>
  );
}

export default App;
