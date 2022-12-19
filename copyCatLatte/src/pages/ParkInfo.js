import { Helmet } from 'react-helmet-async';
import axios from "axios";
import React, { useEffect, useState } from 'react';
// @mui
import { Container } from '@mui/material';
import ParkList from '../_mock/ParkList';



// ----------------------------------------------------------------------

const { kakao } = window;
export default function ParkInfo() {
  const [parks, setParks] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [visible, setVisible] = useState(false);

    useEffect(() => {
      const loadData = async () => {
        const url = 'http://openAPI.seoul.go.kr:8088/4d514f786b79757337386270766a6d/json/SearchParkInfoService/1/131/';
        const response = await axios.get(url);
        const dataCluster = JSON.stringify(response.data.SearchParkInfoService.row);
        const dataList = JSON.parse(dataCluster);
        setParks(dataList);
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
        
        // 클릭하면 마커 표시할 데이터 불러오기
        const clickData = (parks) => {
          const container = document.getElementById("myMap");
          const options = {
            center: new kakao.maps.LatLng(37.5735, 126.9758875),
            level: 7,
          };
      
          const map = new kakao.maps.Map(container, options);

            parks.forEach((park) => {
              const marker = new kakao.maps.Marker({
                  map,
              position: new kakao.maps.LatLng(park.LATITUDE, park.LONGITUDE),
              text:park.P_PARK
              });
              marker.id=park.P_IDX
              const infowindow = new kakao.maps.InfoWindow({
                content: park.P_PARK
              });
              
              // 마우스 올리면 이름 표시하기
            kakao.maps.event.addListener(
              marker,
              "mouseover",
              makeOverListener(map, marker, infowindow)
            );
            // 마우스 치우면 이름 표시 지우기
            kakao.maps.event.addListener(
              marker,
              "mouseout",
              marker.id===parks[marker.id].P_IDX ? console.log('') : makeOutListener(infowindow)
            );
            
              // 마커 클릭하면 해당 장소 정보 저장
              // eslint-disable-next-line
              kakao.maps.event.addListener(marker, 'click', (e) => {
                infowindow.close();
                setVisible(!visible)
                setSelectedPlace(park);
                infowindow.open(marker);
              });
              }) 
              
              // 마우스 올리고 내릴때 정보창 켰다껐다하기
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
                <title>공원 조회 서비스</title>
            </Helmet>
            <Container>
            <button type="button" onClick={clickData.bind(null,parks)}>공원 위치 보기</button>
                <div id='myMap'
                    style={{
                    width: 1000,
                    height: 500
                }} />
                <br/><br/>
            </Container>
            <Container>
              {visible ? <ParkList park={selectedPlace} /> : ''}
            </Container>
        </>
    );
}

