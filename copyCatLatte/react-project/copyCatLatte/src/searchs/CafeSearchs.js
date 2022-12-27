/* eslint-disable */
import React, { useEffect, useState } from "react";
import { CafeSearch } from '../search/CafeSearch';

import Item from '../search/CafeSearchItem';

const CafeSearchs = props => {
  const [cafes, setCafes] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      cafeSearchHttpHandler(query, true);
    }
  }, [query]);

  // 엔터를 눌렀을 때 호출 되는 함수
  const onEnter = e => {
    if (e.keyCode === 13) {
      setQuery(text);
    }
  };

  // text 검색어가 바뀔 때 호출되는 함수.
  const onTextUpdate = e => {
    setText(e.target.value);
  };

  const cafeSearchHttpHandler = async (query, reset) => {
    const params = {
      query,
      sort: "accuracy", // accuracy | recency 정확도 or 최신
      page: 1, // 페이지번호
      size: 10 // 한 페이지에 보여 질 문서의 개수
    };

    const { data } = await CafeSearch(params);
    if (reset) {
      setCafes(data.documents);
    } else {
      setCafes(cafes.concat(data.documents));
    }
  };
  
    return(
          <div className="container">  
            <div className="row mb-6">
                <div className="input-group mb-3" style={{width:'50%'}} >
                    <select className="btn btn" style={{width:'20%', backgroundColor:'#439A97', color:'white'}}>
                        <option>카페 검색</option>
                    </select>
                    <input type="search"placeholder="검색어를 입력 하세요..." name="query" className="input_search"
                            onKeyDown={onEnter} // enter 
                            onChange={onTextUpdate} // change
                            value={text} // view
                          />
                    <button className="btn btn" style={{backgroundColor:'#439A97', opacity:'70%'}}>검색하기</button>
                </div>
            </div>

              <ul>
                {cafes.map((cafe, index) => (
                  <Item
                    key={index}
                    thumbnail={cafe.thumbnail}
                    title={cafe.title}
                    cafename={cafe.cafename}
                    contents={cafe.contents}
                    url={cafe.url}
                  />
                ))}
              </ul>
            </div>
    )
};


  

export default CafeSearchs;