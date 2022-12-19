import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
// @mui
import {Container} from '@mui/material';
import axios from "axios";
// ----------------------------------------------------------------------

const {kakao} = window;
export default function abandonedInquire() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedSido, setSelectedSido] = useState(null);
    const handleSidoSelect = (e) => {
        setSelectedSido(e.target.value);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedSigungu, setSelectedSigungu] =  useState(null);
    const handleSigunguSelect = (e) => {
        setSelectedSigungu(e.target.value)
        // .append('<option value ="` + {item.orgCd} + `">' + {orgdownNm} +'</option>');
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [shelters, setshelters] = useState(null);
    const searchHandler = async () =>
    {
        const type = "json"
        const uprCd = "6110000";
        const serviceKey = "eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D";
        const shelterUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/shelter?serviceKey=${serviceKey}&upr_cd=${uprCd}&org_cd=3220000&_type=${type}`;
        axios.get(shelterUrl)
            .then((response) => {
                setshelters(response.data.response.body.items.item)
            });
    };
    // 질문: orgCd = uprCd; 이거 처리 어떻게?
    // 시, 도 조회 ----------------------------------------------------------------------
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?serviceKey=eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D
        const type = "json"
        const serviceKey = "eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D";
        const sidoUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?serviceKey=${serviceKey}&numOfRows=17&pageNo=1&_type=${type}`;
        axios.get(sidoUrl)
            .then( (response) => {
                setSelectedSido(response.data.response.body.items.item);
            });
        // 시, 군, 구 조회 ----------------------------------------------------------------------
        // const uprCd = "6110000";
        const uprCd = ["6110000","6260000","6270000","6280000","6290000","5690000","6300000","6310000","6410000","6420000","6430000","6440000","6450000", "6460000","6470000","6480000","6500000", ]
        const sigunguUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?serviceKey=${serviceKey}&upr_cd=${uprCd}&_type=${type}`;
        axios.get(sigunguUrl)
            .then((response)=>{
                setSelectedSigungu(response.data.response.body.items.item)
            });

        // 보호소 검색----------------------------------------------------------------------


        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);

    }, []);

    return (
        <>
            <Container className="align-content-lg-center">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="mt-4 mb-4 fw-bold"> 보호소 조회하기</h2>

                        <div className="row mb-3">
                            <div className="form-group col-md-4">
                                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                <label className="mb-2">시, 도 조회</label>
                                <select className="form-select form-select-sm mb-1" aria-label=".form-select-lg example"
                                        defaultValue="시, 도 조회">
                                    {
                                        selectedSido? selectedSido.map((item, idx)=> (
                                                    <option value={item.orgCd} key={item.orgCd}>{item.orgdownNm}</option>
                                                )
                                            )
                                            : <option>데이터없당🙅‍♂️</option>
                                    }
                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                <label className="mb-2">시, 군, 구 조회</label>
                                <select onChange={handleSigunguSelect} className="form-select form-select-sm mb-1" aria-label=".form-select-lg example"
                                        defaultValue="시, 군, 구 조회">
                                    {
                                        selectedSigungu? selectedSigungu.map((item, idx)=> (
                                                    <option value={item.orgCd} key={item.orgCd}>{item.orgdownNm}</option>
                                                )
                                            )
                                            : <option>시군구 데이터없당🙅‍♂️</option>
                                    }
                                </select>
                            </div>

                            <div className="form-group col-md-3">
                                <button type={"button"} className="btn btn-secondary" onClick={searchHandler}>조회하기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>

                <div id='myMap'
                     style={{
                         width: 1100,
                         height: 500
                     }}/>
                <br/><br/>

                <button type={"button"} className="btn btn-primary" onClick={searchHandler}>유기동물 리스트</button>
                <table className="table table-hover">
                    <thead>
                    <th/>
                    </thead>
                    <tbody>
                    { shelters ?
                        shelters.map( (item, idx) => (
                                <tr key={idx}>
                                    <td>{ item.careNm }</td>
                                </tr>
                            )
                        )
                        :
                        <tr/>
                    }
                    </tbody>
                </table>

                <Outlet/>
            </Container>
        </>
    );
}