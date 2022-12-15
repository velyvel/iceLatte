import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
// @mui
import { Container } from '@mui/material';
// mock
import ParkInfoData from '../_mock/parkInfoData';



// ----------------------------------------------------------------------

const { kakao } = window;
export default function ParkInfo() {
    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        const container = document.getElementById("myMap");
        const options = {
            center: new kakao.maps.LatLng(37.624915253753194, 127.15122688059974),
            level: 5,
        };

        const map = new kakao.maps.Map(container, options);

        // 마커 표시할 데이터 불러오기
        ParkInfoData.forEach((el) => {
            const marker = new kakao.maps.Marker({
                map,
                position: new kakao.maps.LatLng(el.lat, el.lng),
            });

            const infowindow = new kakao.maps.InfoWindow({
                content: el.title
            });

            //   마우스 올리면 이름 표시되게 하기
            kakao.maps.event.addListener(
                marker,
                "mouseover",
                makeOverListener(map, marker, infowindow)
            );
            kakao.maps.event.addListener(
                marker,
                "mouseout",
                makeOutListener(infowindow)
            );
        });

        function makeOverListener(map, marker, infowindow) {
            return function () {
                infowindow.open(map, marker);
            };
        }
        function makeOutListener(infowindow) {
            return function () {
                infowindow.close();
            };
        }

    };
    return (
        <>
            <Helmet>
                <title>공원 조회 서비스</title>
            </Helmet>
            <Container>
                <h4>공원 조회</h4>
                <div id='myMap'
                     style={{
                         width: 1000,
                         height: 500
                     }} />
                <br/><br/>
            </Container>
            <Container>
                <h4>공원 리스트</h4>
                <br/><br/>
                { /* <ParkInfoApi /> */ }
            </Container>
        </>
    );
}



