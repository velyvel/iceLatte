/*eslint-disable*/
// response.data.response.body.items.item[0].careNm
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Outlet} from 'react-router-dom';
// @mui
import {Container} from '@mui/material';
import axios from "axios";
import '../pages/search.css';
// ----------------------------------------------------------------------

// TODO onchange
const type = "json";
const serviceKey = "eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D";
const {kakao} = window;

// const container = document.getElementById('myMap');
// const options = {
//     center: new kakao.maps.LatLng(37.64978, 126.87009),
//     level: 3
// };

const abandonedInquire=() =>{

    const [ sidoList, setSidoList ] = useState([]);
    const [selectedSido, setSelectedSido] = useState([]);

    const markers = useRef([])

    useEffect(() => {

        const sidoUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?serviceKey=${serviceKey}&numOfRows=17&pageNo=1&_type=${type}`;
        axios.get(sidoUrl)
            .then( (response) => {
                setSidoList(response.data.response.body.items.item);
                findSigunguList(response.data.response.body.items.item[0].orgCd);
            });
    }, []);

    const handleSido = (e) => {
        setSelectedSido(e.target.value);
        findSigunguList(e.target.value);
    };

    const [sigunguList, setSigunguList] = useState([]);
    const [selectedSigungu, setSelectedSigungu] = useState([]);

    const findSigunguList = (selectedSido1) => {
        // const uprCd = ["6110000","6260000","6270000","6280000","6290000","5690000","6300000","6310000","6410000","6420000","6430000","6440000","6450000", "6460000","6470000","6480000","6500000", ]
        const sigunguUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?serviceKey=${serviceKey}&upr_cd=${selectedSido1}&_type=${type}`;
        axios.get(sigunguUrl)
            .then((response)=>{
                setSigunguList(response.data.response.body.items.item);
            });
    }

    const handleSigungu = (e) => {
        setSelectedSigungu(e.target.value);
    }

    const [shelterList, setShelterList] = useState(null);
    const [selectedShelter, setSelectedShelter] = useState(null);

    const searchHandler = async () =>
    {
        const uprCd = selectedSido;
        const orgCd = selectedSigungu;
        const serviceKey = "eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D";
        const shelterUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/shelter?serviceKey=${serviceKey}&upr_cd=${uprCd}&org_cd=${orgCd}&_type=${type}`;
        axios.get(shelterUrl)
            .then((response) => {
                setShelterList(response.data.response.body.items.item)
                //findShelter(response.data.response.body.items.item.[0])
            });
    };

    const onChange2 = (item) => {
        findShelter(item);
    }

    // const onChange3 = (item) => {
    //     findShelter(item[0]);
    // }

    const findShelter =  (shelter1) => {
        const careRegNo = shelter1.careRegNo;
        const sheDetailUrl =  `https://apis.data.go.kr/1543061/animalShelterSrvc/shelterInfo?serviceKey=${serviceKey}&care_reg_no=${careRegNo}&_type=${type}`;
        axios.get(sheDetailUrl)
            .then((response) => {
                try {
                    markers.current.forEach((marker) => {
                        marker.setMap(null);
                    });
                    markers.current.splice(0, markers.current.length);

                    const { lat, lng } = response.data.response.body.items.item[0];
                    if (!Boolean(lat) || !Boolean(lng)) {
                        alert('????????? ?????? ????????? ????????????.');
                        return;
                    }

                    setSelectedShelter(response.data.response.body.items.item[0]);
                    console.log(response);
                    const markerPosition = new kakao.maps.LatLng(lat, lng);
                    const marker = new kakao.maps.Marker({
                        position:markerPosition
                    });
                    const moveLatLon = new kakao.maps.LatLng(lat, lng);
                    //TODO: ???????????? ????????????
                    const iwName = response.data.response.body.items.item[0].careNm;
                    const iwAddr = response.data.response.body.items.item[0].careAddr;
                    const iwContent = `<div style="border-radius: 30px; text-align: center;">${iwName}<br/>${iwAddr}</div>`,
                          iwPosition = new kakao.maps.LatLng(lat,lng);
                    marker.setMap(map);
                    map.setCenter(moveLatLon);
                    markers.current.push(marker);
                    const infowindow = new kakao.maps.InfoWindow({
                        position : iwPosition,
                        content : iwContent
                    });
                    infowindow.open(map,marker);

                } catch(e) {
                    alert('????????? ?????? ????????? ????????????.');

                }
            });
    }
    const mapScript = () => {
        const container = document.getElementById("myMap");
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 2,
        };
        const map = new kakao.maps.Map(container, options);
        setMap(map);

    };

    const [map, setMap] = useState( null );
    useEffect(()=>{
        mapScript();
    },[]);




    //===============================MapContainer================================================================

    return (
        <>
            <Container className="align-content-lg-center">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="mt-4 mb-4 fw-bold"> ????????? ????????????</h2>

                        <div className="row mb-3">

                            <div className="form-group col-md-4">
                                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                <label className="mb-2">???, ??? ??????</label>
                                <select className="form-select form-select-sm mb-1"
                                        aria-label=".form-select-lg example"
                                        defaultValue="???, ??? ??????" onChange={handleSido}>
                                    {
                                        sidoList ? sidoList.map((item, idx) => (
                                                    <option value={item.orgCd}
                                                            key={item.orgCd}>{item.orgdownNm}</option>
                                                )
                                            )
                                            : <option>????????????????????????????</option>
                                    }

                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                <label className="mb-2">???, ???, ??? ??????</label>
                                <select className="form-select form-select-sm mb-1"
                                        aria-label=".form-select-lg example"
                                        defaultValue="???, ???, ??? ??????" onChange={handleSigungu}>
                                    {
                                        sigunguList ? sigunguList.map((item, idx) => (
                                                    <option value={item.orgCd}
                                                            key={item.orgCd}>{item.orgdownNm}</option>
                                                )
                                            )
                                            : <option>????????? ????????????????????????????</option>
                                    }
                                </select>
                            </div>


                            <div className="form-group col-md-3">
                                <button type={"button"} className="btn btn-secondary"
                                        onClick={searchHandler}>????????????
                                </button>
                            </div>
                        </div>

                        <div>
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th/>
                                    <th/>
                                </tr>
                                </thead>
                                <tbody>
                                {shelterList ?
                                    shelterList.map(item => (
                                            <tr key={item.careNm}>
                                                <td>{item.careNm}</td>
                                                <td>
                                                    <button className="btn btn-outline-primary"
                                                            onClick={() => onChange2(item)}style={{alignItems:'flex-start'}}>????????????
                                                    </button>
                                                </td>
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
                    <br/>

                    <div id='myMap'
                         style={{
                             width: 1000,
                             height: 500
                         }}/>
                    <br/><br/>
                    <br/><br/>
                    <div>
                        {/*<table style={{border: '5px solid black', width: '1000px', marginTop: '20px'}}*/}
                        {/*        onChange={onChange3}>*/}
                            <table className="table table-hover" style={{marginTop: '20px'}}>
                            <thead>
                            <tr>
                                <th colSpan={3}><button type='button' className="btn btn-secondary">????????????</button></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr style={{textAlign:'center'}}>
                                <td>?????????</td>
                                <td>??????</td>
                                <td>?????????</td>
                            </tr>
                            {selectedShelter?
                            <tr style={{textAlign:'center'}}>
                                <td>{selectedShelter.careNm}</td><td>{selectedShelter.careAddr}</td><td>{selectedShelter.careTel}</td>
                            </tr>
                                :
                                null
                            }
                            </tbody>
                        </table>
                    </div>
                    <Outlet/>
                </div>
            </Container>
        </>
    );
}

export default React.memo(abandonedInquire);