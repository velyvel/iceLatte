import {useState, useEffect} from 'react';
import axios from "axios";

const proj4 = require("proj4").default;

function TmToWgs() {

    const [xys, setXys] = useState([]);

    // 좌표 변환
    const tm2097 = "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43";
    const wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees";

    const getHospitalXy = () => {
        const url = `http://openapi.seoul.go.kr:8088/43566e4768776c67363270416d6979/json/LOCALDATA_020301/1/20/`;
        axios.get(url).then(
            (response) => {
                const searchedXys = response.data.LOCALDATA_020301.row.map( (hospital) => {
                    if (hospital.X === "" || hospital.Y === "") {
                        return {x: 0, y: 0}
                    }
                    const tmtowgs = proj4(tm2097, wgs84, [parseFloat(hospital.X.trim()) ,parseFloat(hospital.Y.trim())]);
                    return {x: tmtowgs[0], y: tmtowgs[1]};
                });
                setXys(searchedXys);
            }
        );
    }

    useEffect(() => {
        getHospitalXy();
    }, []);

    return (
        <div>
            {
                xys ?
                xys.map( (xy, idx) => {
                    return (<p key={idx}>{xy.x} / {xy.y}</p>)
                })
                :
                <p>data not available</p>
            }
        </div>
    )


        

}

export default TmToWgs;