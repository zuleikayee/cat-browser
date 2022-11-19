import '../../Grid.css';
import useApiData from '../../utils/useApiData'

function Grid() {
    const breeds = useApiData();
    const breedImgArr = [];

    for (const curr of breeds) {
        const { image, name } = curr;
        const imageProps = {...image, alt: name, src: image?.url};
        console.log(imageProps);
        breedImgArr.push(imageProps);
    }

    return (
        <div className="grid-wrapper">
            <div className="grid">
                { 
                    breedImgArr.map((image) => (
                        <div class="card">
                            <img {...image}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
  
export default Grid;