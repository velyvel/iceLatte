
import axios from 'axios';
import { useState,useEffect } from 'react';
import { json } from 'react-router-dom';
import BreedInfo from './Breeds/BreedInfo';
import BreedItemOption from './Breeds/BreedItemOption';

const RecommendationSearch=()=>{
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState();
    const [selectedBreedInfo, setSelectedBreedInfo] = useState([]);
    const [selectedV, setSelectedV] = useState("");

  
    // useEffect((e)=>{
    //     console.log(JSON.stringify(selectedBreedInfo));

    // },selectedBreedInfo);


    const breedHandler=(e)=>{    
        for (let i = 0; i < breeds.length; i += 1) { 
 
            const breed = breeds[i];
            // setSelectedBreed ( document.querySelector('#selectedBreed').value);

            if(breed.id===selectedV) {
                setSelectedBreedInfo(breed);
                console.log(JSON.stringify(selectedBreedInfo));
                // eslint-disable-next-line
                // debugger;
                // eslint-disable-next-line
                break;
            }
            
        }
        
            
    }

    const changeValue = (e) => {
        setSelectedV(e.target.value);
    }
   
   
    useEffect(()=>{
        const urlForBreeds = `https://api.thecatapi.com/v1/breeds`;
        axios.get(urlForBreeds)
             .then( (response) => {
                    setBreeds(response.data);
                    
              })
    },[]);
    return (
        <div >
          <select id='selectedBreed' onChange={ changeValue } value={ selectedV }>
          {

            breeds ?
              breeds.map((breed, idx) => {
                return (
                  <BreedItemOption key={breed.id} breed={breed} />
                  

                )
              })
              : "빈 데이터"

              
          }
          
        </select>
        <button onClick={breedHandler} >종 가져오기</button>
       <BreedInfo selectedBreedInfo={selectedBreedInfo}/>
        </div>
    )
}
export default RecommendationSearch;