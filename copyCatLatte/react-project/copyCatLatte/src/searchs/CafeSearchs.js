/* eslint-disable */
import React, { useEffect, useState } from "react";
import { CafeSearch } from '../search/CafeSearch';

import Item from '../search/CafeSearchItem';
import styled from "styled-components";

const CafeBlock = styled.div`
width: 300px;
* {
  font-family: "Noto Sans KR", sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
}

html,
body {
  height: 100%;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}

.input_search {
  font-family: "Noto Sans KR", sans-serif;
  font-size: 18px;
  border: 0;
  border-bottom: 1px solid #dddddd;
  width: 600px;
  padding: 20px;
  display: block;
  transition: border 0.3s;
}

.input_search:focus {
  outline: none;
  border-bottom: 1px solid #0675f3;
}

ul {
  display: grid;
  width: 400px;
  margin: auto;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
}

li {
  width: 270px;
  list-style-type: none;
  border: 1px solid #dddddd;
  padding: 20px;
}

li dl {
  display: flex;
  flex-direction: column;
}

li dl dt {
  height: 200px;
}

li dl dt img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

li dl dd {
  flex: 1;
}
`;


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
                    <div className="btn btn" style={{width:'20%', backgroundColor:'#439A97', color:'white'}}>
                        <option>카페 검색</option>
                    </div>
                    <input type="search"placeholder="검색어를 입력 하세요..." name="query" className="input_search"
                            onKeyDown={onEnter} // enter 
                            onChange={onTextUpdate} // change
                            value={text} // view
                          />
                </div>
            </div>
            <CafeBlock>
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
              </CafeBlock>
            </div>
    )
};


  

export default CafeSearchs;