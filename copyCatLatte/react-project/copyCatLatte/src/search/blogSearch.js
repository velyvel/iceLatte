import React from "react";

const blogSearch = () => {
    return(
        <>
            <div className="row mb-6">
                <div className="input-group mb-3" style={{width:'50%'}} >
                    <select className="btn btn" style={{width:'20%', backgroundColor:'#439A97', color:'white'}}>
                        <option>몰랑 ㅎㅎㅎㅎ</option>
                    </select>
                    <input className="form-control" placeholder="검색어를 입력해주세요"/>
                    <button className="btn btn" style={{backgroundColor:'#439A97', opacity:'70%'}}>검색하기</button>
                </div>
            </div>
        </>
    )
};
export default blogSearch;