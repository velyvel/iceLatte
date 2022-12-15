import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// ----------------------------------------------------------------------

const { kakao } = window;
export default function abandonedInquire() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);

    }, []);


    return (
        <>
            <Container>
                <h4> 지역별 보호소 조회</h4>


                <div id='myMap'
                     style={{
                         width: 1000,
                         height: 500
                     }}/>
                <br/><br/>

                <Outlet />

            </Container>
        </>
    );
}