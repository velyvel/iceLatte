import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

const AbandonedList = () => {

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

        // const onSearch = (e) => {
        //     e.preventDefault();
        //     if(search === null || search === ''){
        //         axios.get(url)
        //             .then(response)=> {
        //             set
        //         }
        //     }
        // }
        

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

            <table className="table table-hover">
                <thead>
                    <th>종</th>
                    <th>보호장소</th>
                    <th>사진</th>
                    <th>발견장소</th>
                    <th>보호상태</th>
                    <th>중성화여부</th>
                </thead>
                <tbody>
                { abLists ?
                    abLists.map( (item, idx) => (
                        <tr key={idx}>
                            <td>{ item.kindCd }</td>
                            <td>{ item.careNm }</td>
                            <td><img src={item.filename} alt={item.filename}/></td>
                            <td>{ item.orgNm }</td>
                            <td>{ item.processState }</td>
                            <td>{ item.neuterYn }</td>
                        </tr>
                        )
                    )
                    :
                    <tr><td colSpan={6}/></tr>
                }
                </tbody>
            </table>



        </div>
    );
};
export default AbandonedList;