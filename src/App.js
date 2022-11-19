import './App.css';
import useApiData from './utils/useApiData'
import Grid from './components/Grid/Grid';

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
        <div className="menu">
          <h4>Breed</h4>
          <select name="breeds" id="dropdown-breeds">
            { breedNameArr.map((breedName) => (
              <option value={breedName}>{breedName}</option>
              ))
            }
          </select>
        </div>
        <Grid />
        <button id="button-loadmore" className="button-primary">Load More</button>
      </header>
    </div>
  );
}

export default App;
