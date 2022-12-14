import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
import {Link, Outlet} from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// ----------------------------------------------------------------------

const { kakao } = window;
export default function RecommendationPage() {

    // const MapContainer = () => {
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
                <Helmet>
                    <title>유기동물 조회 서비스</title>
                </Helmet>
                <Container>
                    <h4>유기동물 조회</h4>
                    <div style={{padding: 20}}>
                        [<Link to="abandoned/abandonedList">List</Link>]
                        [<Link to="abandoned/abandonedInquire">Inquire</Link>]
                        [<Link to="abandoned/abandonedChart">Chart</Link>]
                        <hr/>

                    </div>

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
//  }




