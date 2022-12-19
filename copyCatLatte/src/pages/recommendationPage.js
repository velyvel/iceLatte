import { Helmet } from 'react-helmet-async';
import React, { useEffect } from 'react';
// @mui
import { Container } from '@mui/material';
// components
import { ProductList } from '../sections/@dashboard/products';
// mock
import PRODUCTS from '../_mock/recommendation';
// ----------------------------------------------------------------------

const { kakao } = window;
export default function RecommendationPage() {

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
                <div id='myMap'
                    style={{
                    width: 1000,
                    height: 500
                }} />
                <br/><br/>
                <ProductList products={PRODUCTS} />
            </Container>
        </>
    );
}




