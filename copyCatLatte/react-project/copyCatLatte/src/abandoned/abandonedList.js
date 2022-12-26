/* eslint-disable */

import React, {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from '../pagination/pagination'

//  TODO 검색기능 구현하기
const serviceKey = "eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D";
const url= `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${serviceKey}&_type=json&numOfRows=30`;

    const AbandonedList = () => {

        const [abLists, setAbLists] = useState(null);
        const clickHandler = async () => {
            const response = await axios.get(url);
            setAbLists(response.data.response.body.items.item);

        };

        const SearchedList = ({searchTerm}) => {

            const filteredList = abLists?
                abLists.filter((item)=>{
                    if(searchTerm == ""){
                        return item
                    }else if(item.kindCd.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return item
                    }
                    else if(item.careNm.toLowerCase().includes(searchTerm.toLowerCase())){
                        return item
                    }
                    else if(item.orgNm.toLowerCase().includes(searchTerm.toLowerCase())){
                        return item
                    }
                    else if(item.processState.toLowerCase().includes(searchTerm.toLowerCase())){
                        return item
                    }
                    else if(item.neuterYn.toLowerCase().includes(searchTerm.toLowerCase())){
                        return item
                    }

                })
                :
                [];

            return (
                <>
                    {
                        filteredList.length > 0 ?
                            filteredList.map((item, idx)=> {
                                return (
                                    <tr>
                                        <td>{idx + 1}</td>
                                        <td style={{width: '20%'}}>{item.kindCd}</td>
                                        <td>{item.careNm}</td>
                                        <td><img src={item.filename} alt={item.filename}
                                                 style={{width: "50px", height: "40px"}}/></td>
                                        <td>{item.orgNm}</td>
                                        <td>{item.processState}</td>
                                        <td>{item.neuterYn}</td>
                                    </tr>
                                );
                            })
                            :
                            <tr><td colSpan={7}>결과가 없습니다.</td></tr>
                    }
                </>
            )
        }

        const [searchTerm, setSearchTerm] = useState('')
// ============== search (filter)  ============================================================================
        const [currentPage, setCurrentPage] = useState(1)
// ============== paging (pagination.js)  ============================================================================
        return (
            <div>

                <div className="row mb-6">
                    <button type={"button"} className="btn btn" style={{backgroundColor: '#439A97', opacity: '70%', width:'30%', margin: '0 auto', marginBottom:'20px'}}
                            onClick={clickHandler}>전체검색
                    </button>
                    <br/><br/>
                    <div className="input-group mb-3">
                        <input className="form-control-sm" type="text" placeholder="검색어를 입력해주세요" onChange={event => {setSearchTerm(event.target.value)}} style={{margin:'0 auto', marginBottom:'20px'}}/>
                        <br/><br/>
                        <table style={{alignItems:"center"}} className="table table-hover">
                            <thead style={{display:"none"}}>
                            <tr>
                                <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th>
                            </tr>
                            </thead>
                            <tbody>
                                <SearchedList searchTerm={searchTerm} />
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="container">
                    <Pagination
                        currentPage={currentPage}
                        total={500}
                        limit={20}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </div>
            </div>

        );
    };


export default AbandonedList;