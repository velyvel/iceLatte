import { Helmet } from 'react-helmet-async';
import axios from "axios";
import React, { useEffect, useState } from 'react';
// @mui
import { Container } from '@mui/material';
import ShelterList from "../_mock/ShelterList";



// ----------------------------------------------------------------------

const { kakao } = window;
export default function ParkInfo() {
    const [shelters, setShelters] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            const url = 'http://openAPI.seoul.go.kr:8088/4d514f786b79757337386270766a6d/json/SearchParkInfoService/1/131/';
            const response = await axios.get(url);
            const dataCluster = JSON.stringify(response.data.SearchParkInfoService.row);
            const dataList = JSON.parse(dataCluster);
            setShelters(dataList);
        }
        loadData();
        mapscript();
    }, []);

    const mapscript = () => {
        const container = document.getElementById("myMap");
        const options = {
            center: new kakao.maps.LatLng(37.5735, 126.9758875),
            level: 7,
        };
        // eslint-disable-next-line
        const map = new kakao.maps.Map(container, options);

    };

    const searchShelter = (shelters) => {
        const container = document.getElementById("myMap");
        const options = {
            center: new kakao.maps.LatLng(37.5735, 126.9758875),
            level: 7,
        };

        const map = new kakao.maps.Map(container, options);

        shelters.forEach((park) => {
            const marker = new kakao.maps.Marker({
                map,
                position: new kakao.maps.LatLng(park.LATITUDE, park.LONGITUDE),
                text:park.P_PARK
            });
            marker.id=park.P_IDX
            const infowindow = new kakao.maps.InfoWindow({
                content: park.P_PARK
            });

            kakao.maps.event.addListener(
                marker,
                "mouseover",
                makeOverListener(map, marker, infowindow)
            );
            kakao.maps.event.addListener(
                marker,
                "mouseout",
                marker.id===shelters[marker.id].P_IDX ? console.log('') : makeOutListener(infowindow)
            );

            // eslint-disable-next-line
            kakao.maps.event.addListener(marker, 'click', (e) => {
                infowindow.close();
                setVisible(!visible)
                setSelectedPlace(shelters);
                infowindow.open(marker);
            });
        })

        function makeOverListener(map, marker, infowindow) {
            return function clickOpen() {
                infowindow.open(map, marker);
            };
        }
        function makeOutListener(infowindow) {
            return function clickClose() {
                infowindow.close();
            };
        }

    };

    return (
        <>
            <Helmet>
                <title>보호소 리스트 조회</title>
            </Helmet>
            <Container>
                <button type="button" onClick={searchShelter.bind(null,shelters)}>보호소 위치 확인</button>
                <div id='myMap'
                     style={{
                         width: 1000,
                         height: 500
                     }} />
                <br/><br/>
            </Container>
            <Container>
                {/* eslint-disable-next-line react/no-unknown-property */}
                {visible ? <shelterList shelterList ={selectedPlace} /> : ''}
            </Container>
        </>
    );
}

