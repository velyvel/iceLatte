
/* eslint-disable */
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

// @mui
import {Container} from '@mui/material';
import axios from "axios";
// ----------------------------------------------------------------------

const {kakao} = window;
export default function abandonedInquire() {
    const [selectedSido, setSelectedSido] = useState(null);
    const handleSidoSelect = (e) => {
        setSelectedSido(e.target.value);
    };

    const [selectedSigungu, setSelectedSigungu] =  useState(null);
    const handleSigunguSelect = (e) => {
        setSelectedSigungu(e.target.value)
            // .append('<option value ="` + {item.orgCd} + `">' + {orgdownNm} +'</option>');
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [addressLists, setAddressLists] = useState(null);
    const searchHandler = {

    };

    // 질문: orgCd = uprCd; 이거 처리 어떻게?

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        // http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?serviceKey=eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D

        const serviceKey = "eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D";
        const sidoUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?serviceKey=${serviceKey}&numOfRows=17&pageNo=1&_type=json`;
        axios.get(sidoUrl)
             .then( (response) => {
                 setAddressLists(response.data.response.body.items.item);
             });
        // http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?serviceKey=eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D&upr_cd=6110000
        const uprCd = "6110000";
        const sigunguUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?serviceKey=${serviceKey}&upr_cd=${uprCd}&_type=json`;
        axios.get(sigunguUrl)
            .then((response)=>{
                setSelectedSigungu(response.data.response.body.items.item)
            });

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
                <h5> 지역별 보호소 조회</h5>
                <form>
                    <div className="btn-toolbar mb-3">
                        <select onChange={handleSidoSelect} className="form-select form-select-sm mb-1" aria-label=".form-select-lg example"
                                defaultValue="시, 도 조회">
                            {
                                addressLists? addressLists.map((item, idx)=> (
                                        <option value={item.orgCd} key={item.orgCd}>{item.orgdownNm}</option>
                                    )
                                )
                                : <option>데이터없당🙅‍♂️</option>
                            }
                        </select>
                        <br/>
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
                        <br/>
                        <button type={"button"} className="btn btn-secondary" onClick={searchHandler}>조회하기</button>
                    </div>

                </form>
                <br/>

                <div id='myMap'
                     style={{
                         width: 1100,
                         height: 500
                     }}/>
                <br/><br/>

                <table className="table table-hover">
                    <thead>
                    <th>보호소명</th>
                    </thead>
                    <tbody>
                    { addressLists ?
                        addressLists.map( (item, idx) => (
                                <tr key={idx}>
                                    <td>{ item.careNm }</td>
                                </tr>
                            )
                        )
                        :
                        <tr><td/>조회하기</tr>
                    }
                    </tbody>
                </table>

                <Outlet/>
            </Container>
        </>
    );
}