/* eslint-disable */
import React, {useEffect, useState  } from 'react';
import axios from "axios";

// ----------------------------------------------------------------------
    const {kakao} = window;
    const abandonedHome = () => {

        const [ sidoList, setSidoList ] = useState([]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let selectedSido = null;

        const [ sigunguList, setSigunguList] = useState([]);
        // eslint-disable-next-line
        let selectedSigungu =  null;

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [form, setForm] = useState({
            selectedSido: '',
            selectedSigungu: '',
        });

        const type = "json";
        const serviceKey = "eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D";

        // eslint-disable-next-line
        useEffect(() => {

            const sidoUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido?serviceKey=${serviceKey}&numOfRows=17&pageNo=1&_type=${type}`;
            axios.get(sidoUrl)
                .then( (response) => {
                    setSidoList(response.data.response.body.items.item);
                    findSigunguList(response.data.response.body.items.item[0].orgCd);
                });
        }, [])

        const onChange = (e) => {
            selectedSido = e.target.value;
            findSigunguList(selectedSido);

        };

        const findSigunguList = (selectedSido) => {
            // const uprCd = ["6110000","6260000","6270000","6280000","6290000","5690000","6300000","6310000","6410000","6420000","6430000","6440000","6450000", "6460000","6470000","6480000","6500000", ]
            const sigunguUrl = `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/sigungu?serviceKey=${serviceKey}&upr_cd=${selectedSido}&_type=${type}`;
            axios.get(sigunguUrl)
                .then((response)=>{
                    setSigunguList(response.data.response.body.items.item);
                    console.log("")
                });
        }

        return (
            <>
                <select name="selectValue" onChange={onChange}>
                    {
                        sidoList? sidoList.map((item, idx)=> (
                                    <option value={item.orgCd} key={item.orgCd}>{item.orgdownNm}</option>
                                )
                            )
                            : <option>데이터없당🙅‍♂️</option>
                    }
                </select>
                <select name="selectValue">
                    {
                        sigunguList? sigunguList.map((item, idx)=> (
                                    <option value={item.orgCd} key={item.orgCd}>{item.orgdownNm}</option>
                                )
                            )
                            : <option>시군구 데이터없당🙅‍♂️</option>
                    }
                </select>

            </>
        );
    }

export default React.memo(abandonedHome);

