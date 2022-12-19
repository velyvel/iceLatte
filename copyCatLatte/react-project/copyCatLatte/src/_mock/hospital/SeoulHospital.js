/*  eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Hospital from "./Hospital";

import { Map, MapMarker } from 'react-kakao-maps-sdk';

const { kakao } = window;
const proj4 = require("proj4").default;

const SeoulHospital = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    // 좌표 변환
    const tm2097 = "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43";
    const wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees";

    const getHospital = () => {
        setIsLoading(true);
        const url = `http://openapi.seoul.go.kr:8088/43566e4768776c67363270416d6979/json/LOCALDATA_020301/1/1000/`;
        axios.get(url).then(
            (response) => {
                const data = response.data.LOCALDATA_020301.row;
                const data2 = data.filter((hospital) => {
                    if (hospital.DTLSTATEGBN === '0000') {
                        if (hospital.X === "" || hospital.Y === "") {
                            hospital.X = 0;
                            hospital.Y = 0;
                        } else {
                            const tmtowgs = proj4(tm2097, wgs84, [parseFloat(hospital.X.trim()) ,parseFloat(hospital.Y.trim())]);
                            hospital.X = tmtowgs[0];
                            hospital.Y = tmtowgs[1];
                        }
                        // return hospital;
                        return true;
                    } else {
                        return false;
                    }
                });

                setIsLoading(false);
                setData(data2);
            }
        );
    }

    // 처음 loading 될 때에만 실행
    useEffect( () => {
        getHospital();
    }, []);

    return (
        <>
        <Map // 지도를 표시할 Container
            center={{
                // 지도의 중심좌표
                lat: 37.566345,  // y
                lng: 126.977893, // x
            }}
            style={{
                // 지도의 크기
                width: "100%",
                height: "450px",
            }}
            level={5} // 지도의 확대 레벨
            >
            {data.map((hospital) => (
                <MapMarker
                    key={`${hospital.BPLCNM}-${hospital.X}-${hospital.Y}`}
                    position={ {lat: hospital.Y, lng: hospital.X} } // 마커를 표시할 위치
                    image={{
                        src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                        size: {
                        width: 24,
                        height: 35
                        }, // 마커이미지의 크기입니다
                    }}
                    title={hospital.BPLCNM} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                />
            ))}
        </Map>
        <section className="container">
            {isLoading ? (
                <div className="loader">
                    <span className="loader_text">Loading...</span>
                </div>
            ):(
                <div className="HospitalInfo">
                    { data ? 
                        data.map((d, cnt) => (
                                <Hospital
                                    key={cnt}
                                    BPLCNM={d.BPLCNM}
                                    SITETEL={d.SITETEL}
                                    SITEWHLADDR={d.SITEWHLADDR}
                                    RDNWHLADDR={d.RDNWHLADDR} />
                                )
                        )
                        :
                        <div>data not available</div>
                    }
                </div>
            )}
        </section>
        </>
    )
}

export default SeoulHospital;