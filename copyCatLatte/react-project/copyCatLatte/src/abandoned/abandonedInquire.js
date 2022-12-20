/* eslint-disable */

import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
// @mui
import {Container} from '@mui/material';
import axios from "axios";
// ----------------------------------------------------------------------

// TODO onchange

const {kakao} = window;
const abandonedInquire=() =>{

    const [ sidoList, setSidoList ] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedSido, setSelectedSido] = useState([]);

    const [ sigunguList, setSigunguList] = useState([]);
    // eslint-disable-next-line
    const [selectedSigungu, setSelectedSigungu] = useState([]);

    const type = "json";
    const serviceKey = "eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D";


    //  ============================================================== eslint-disable-next-line react-hooks/rules-of-hooks
    const [shelters, setshelters] = useState(null);
    const searchHandler = async () =>
    {

        const uprCd = selectedSido;
        const orgCd = selectedSigungu;
        const serviceKey = "eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D";
        const shelterUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/shelter?serviceKey=${serviceKey}&upr_cd=${uprCd}&org_cd=${orgCd}&_type=${type}`;
        axios.get(shelterUrl)
            .then((response) => {
                console.log(response)
                setshelters(response.data.response.body.items.item)
            });
    };
    // TODO
    const detailHandler = async () => {
        const careRegNo = "";
        const careNm = "";
        const detailUrl = `https://apis.data.go.kr/1543061/animalShelterSrvc/shelterInfo?serviceKey=${serviceKey}&care_reg_no=${careRegNo}&care_nm=${careRegNo}&numOfRows=3&pageNo=1&_type=${type}`
    }
    //  ----------------------------------------------------------------------
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        const sidoUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?serviceKey=${serviceKey}&numOfRows=17&pageNo=1&_type=${type}`;
        axios.get(sidoUrl)
            .then( (response) => {
                setSidoList(response.data.response.body.items.item);
                findSigunguList(response.data.response.body.items.item[0].orgCd);
            });


        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);

    }, []);

    const handleSigungu = (e) => {
        setSelectedSigungu(e.target.value);
    }

    const onChange = (e) => {
        setSelectedSido(e.target.value);
        findSigunguList(e.target.value);

    };

    const findSigunguList = (selectedSido1) => {
        // const uprCd = ["6110000","6260000","6270000","6280000","6290000","5690000","6300000","6310000","6410000","6420000","6430000","6440000","6450000", "6460000","6470000","6480000","6500000", ]
        const sigunguUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?serviceKey=${serviceKey}&upr_cd=${selectedSido1}&_type=${type}`;
        axios.get(sigunguUrl)
            .then((response)=>{
                setSigunguList(response.data.response.body.items.item);
                // searchHandler(response.data.response.body.items.item[0].orgCd);
            });
    }

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
                                        defaultValue="시, 도 조회" onChange={onChange}>
                                    {
                                        sidoList? sidoList.map((item, idx)=> (
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
                                <select className="form-select form-select-sm mb-1" aria-label=".form-select-lg example"
                                        defaultValue="시, 군, 구 조회" onChange={handleSigungu}>
                                    {
                                        sigunguList? sigunguList.map((item, idx)=> (
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

                        <div>
                            <table className="table table-hover">
                                <thead>
                                <th/>
                                <th/>
                                </thead>
                                <tbody>
                                { shelters ?
                                    shelters.map( (item, idx) => (
                                            <tr key={idx}>
                                                <td>{ item.careNm }</td>
                                                <td><button className="btn btn-outline-primary">상세보기</button></td>
                                            </tr>
                                        )
                                    )
                                    :
                                    <tr/>
                                }
                                </tbody>
                            </table>
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

                <Outlet/>
            </Container>
        </>
    );
}

export default React.memo(abandonedInquire);