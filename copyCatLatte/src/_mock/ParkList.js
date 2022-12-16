// eslint-disable-next-line
const ParkList = ({park}) => {
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
                    {/* eslint-disable-next-line */}
                    <img src={park.P_IMG} alt={park.P_PARK}></img>
                </div>
                <div style={{
                width:'30%',
                height:'300px',
                float:'right'
                }}>
                {/* eslint-disable-next-line */}
                <p>{park.P_PARK}</p>
                {/* eslint-disable-next-line */}
                <p>{park.P_ADDR}</p>
                {/* eslint-disable-next-line */}
                {/* <p>{park.P_LIST_CONTENT}</p> */}
                
              </div>

        </div>
        
        </>
    )

}
export default ParkList;