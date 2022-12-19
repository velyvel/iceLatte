// eslint-disable-next-line
const ShelterList = ({shelter}) => {
    return (
        <>
        <div style={{
              width:'800px',
              height:'300px',
              }}>
                <div style={{
                width:'70%',
                height:'300px',
                float:'left',
                backgroundSize: '300px'
                }}>
                    <img src={shelter.P_IMG} alt={shelter.P_PARK}/>
                </div>
                <div style={{
                width:'30%',
                height:'300px',
                float:'right'
                }}>
                {/* eslint-disable-next-line */}
                <p>{shelter.P_PARK}</p>
                {/* eslint-disable-next-line */}
                <p>{shelter.P_ADDR}</p>
                {/* eslint-disable-next-line */}
                {/* <p>{park.P_LIST_CONTENT}</p> */}
                
              </div>

        </div>
        
        </>
    )

}
export default ShelterList;