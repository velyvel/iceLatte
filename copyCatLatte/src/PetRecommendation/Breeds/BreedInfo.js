
const BreedInfo=({selectedBreedInfo})=>{
    const {id,name,description,image}=selectedBreedInfo;
   console.log(({selectedBreedInfo}));    // const {url}=breedsImg;life_span,country_codes,
    
    return (
        <div >
            {/* <p>imgUrl:{JSON.stringify(image)}</p> */}
            {/* <p>imgUrl:{imaget}</p> */}
            { typeof image !== 'undefined'  ? <img src={image.url} alt="" style={{ width:100, height:100}} /> : <img src="default-image-link" alt="" /> }
            <p>id:{id}</p>
            <p>name:{name}</p>
            {/* <p>country_codes:{country_codes}</p> */}
            <p>description:{description}</p>
            {/* <p>life_span:{life_span}</p> */}
            
        </div>
    )
}
export default BreedInfo;