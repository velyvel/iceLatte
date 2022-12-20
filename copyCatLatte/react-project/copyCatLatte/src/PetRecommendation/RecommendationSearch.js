/* eslint-disable */
import axios from 'axios';
import { useState,useEffect } from 'react';

import { json } from 'react-router-dom';
import qs from 'query-string';

import BreedInfo from './Breeds/BreedInfo';

import BreedItemOption from './Breeds/BreedItemOption';

const RecommendationSearch=()=>{
    const [breeds, setBreeds] = useState([]);
    const [selectedBreedInfo, setSelectedBreedInfo] = useState([]);
    const [selectedV, setSelectedV] = useState("abys");
    const [breedImg, setBreedImg] = useState([]);
    const [papago, setPapago] = useState([]);

    const breedHandler=(e)=>{    
      // 종 검색 
        for (let i = 0; i < breeds.length; i += 1) { 
            const breed = breeds[i];
            // setSelectedBreed ( document.querySelector('#selectedBreed').value);
            if(breed.id===selectedV) {
                setSelectedBreedInfo(breed);
                // console.log((selectedBreedInfo));// test code
                // eslint-disable-next-line
                // debugger;
                // eslint-disable-next-line
                break;
              }   
          }

        // 종에 따른 사진 검색
        const apiKey = "live_q1tvM4oqjNcUwFMR2jYw0mDZC8EeNbWzk9An4QaB68IKrjUnYL3UpycN5K5PNVVp";
        const urlForBreeds = ` https://api.thecatapi.com/v1/images/search?breed_ids=${selectedV}&api_key=${apiKey}&limit=5`;
        axios.get(urlForBreeds)
             .then( (response) => {
                setBreedImg(response.data);
              })
         // 파파고
  
        const urlForPapago = `https://openapi.naver.com/v1/papago/n2mt`;
        axios.post(urlForPapago, {
                headers: {
                    "X-Naver-Client-Id": "tiErIHdBwPR0YJwhrY2v",
                    "X-Naver-Client-Secret": "OoBC00nxKZ"
                  },
                  data: {
                    source: "ko",
                    target: "en",
                    text: "안녕하세요"
                  }
                }
              )
              .then( (response) => {
                setPapago(response.data);
              })
              .catch( (e) => {
                console.log(e);
              })
              
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
       <BreedInfo selectedBreedInfo={selectedBreedInfo} breedImg={breedImg} />
        </div>
    )
}
export default RecommendationSearch;