/*eslint-disable*/

import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';


const AbandonedHome = () => {

    const [abLists, setAbLists] = useState(null);
    const [search, setSearch] = useState(null);
    const clickHandler = async () => {

        const serviceKey = "eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D";
        const url= `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${serviceKey}&_type=json`;
        const response = await axios.get(url);
        setAbLists(response.data.response.body.items.item);


        const onChangeSearch = (e) => {
            e.preventDefault();
            setSearch(e.target.value);
        };


    };


    return(
        <div>

            <div className="row mb-6">
                <div className="input-group mb-3" style={{width:'50%'}} >
                    <select className="btn btn" style={{width:'20%', backgroundColor:'#439A97', color:'white'}}>
                        <option value="{item.kindCd}">품종</option>
                        <option value="{ item.careNm }">보호장소</option>
                        <option value="{ item.orgNm }">지역</option>
                    </select>
                    <input className="form-control" placeholder="검색어를 입력해주세요"/>
                    <button className="btn btn" style={{backgroundColor:'#439A97', opacity:'70%'}} onClick={clickHandler}>검색하기</button>
                    {/* <img src="/assets/icons/search.png" alt="search" style={{maxWidth:'5%'}}/> */}
                </div>
            </div>
            {abLists? abLists.map((item, idx)=>(
                <div className="card" style={{width: '18rem', display:'inline-block', margin:"20px"}}>
                    <img src={item.filename} className="card-img-top" alt="..." style={{width:'290px', height:'230px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">종: &nbsp;{ item.kindCd }</h5>
                        <p className="card-text">보호장소 🏩: &nbsp;{ item.careNm }<br/> 보호 상태🚦{ item.processState }</p>
                        <a href="#" className="btn btn-primary">보호소 정보 보기</a>
                    </div>
                </div>
            )):<p> 검색어 입력 후 검색버튼을 눌러주세요</p>}
            <br/>
        </div>
    );
};
export default AbandonedHome;