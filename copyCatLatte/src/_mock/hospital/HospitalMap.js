import React, { useEffect } from 'react';

const { kakao } = window;

const HospitalMap = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(37.54699, 127.09598),
            level: 6
        };

        const map = new kakao.maps.Map(container, options);

        const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'; // 마커 이미지 주소 
        const imageSize = new kakao.maps.Size(64, 69); // 마커이미지 크기
        const imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지 옵션, 마커의 좌표와 일치시킬 이미지 안에서의 좌표 설정

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        const markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치

        // 마커 생성
        const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage // 마커이미지 설정 
        });

        // 마커가 지도 위에 표시되도록 설정
        marker.setMap(map);

        // 커스텀 오버레이 내용
        const content =
            '<style> .customoverlay {position:relative;bottom:85px;border-radius:6px;border: 1px solid #ccc;border-bottom:2px solid #ddd;float:left;}' +
            '.customoverlay:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}' +
            '.customoverlay a {display:block;text-decoration:none;color:#000;text-align:center;border-radius:6px;font-size:14px;font-weight:bold;overflow:hidden;background: #d95050;background: #d95050 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;}' +
            '.customoverlay .title {display:block;text-align:center;background:#fff;margin-right:35px;padding:10px 15px;font-size:14px;font-weight:bold;}' +
            '.customoverlay:after {content:"";position:absolute;margin-left:-12px;left:50%;bottom:-12px;width:22px;height:12px;background:url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png")}</style>' +
            '<div class="customoverlay">' +
            '  <a href="https://map.kakao.com/link/map/11394059" target="_blank">' +
            '    <span class="title">구의야구공원</span>' +
            '  </a>' +
            '</div>';

        // 커스텀 오버레이 위치
        const position = new kakao.maps.LatLng(37.54699, 127.09598); 

        // 커스텀 오버레이 생성
        const customOverlay = new kakao.maps.CustomOverlay({
            map,
            position,
            content,
            yAnchor: 1
        });

    }, []);

    return (
        <div id='myMap' style={{
            width: '1000px',
            height: '500px'
        }}/>
    );
}

export default HospitalMap;