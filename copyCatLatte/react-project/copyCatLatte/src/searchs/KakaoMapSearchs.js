import React, { useState } from 'react'
import Kakaomap from '../search/kakaomap'

function KakaoMapSearchs() {
  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPlace(InputText)
    setInputText('')
  }

  return (
    <div className="container">  
      <div className="row mb-6">
          <div className="input-group mb-3" style={{width:'50%'}} >

              <select className="btn btn" style={{width:'20%', backgroundColor:'#439A97', color:'white'}}>
                  <option>지도 검색</option>
              </select>
            <form className="inputForm" onSubmit={handleSubmit}>
              <input type="search"placeholder="검색어를 입력 하세요" name="query" className="input_search"
                     onChange={onChange} value={InputText}
                    />
              <button type="submit" className="btn btn" style={{backgroundColor:'#439A97', opacity:'70%'}}>검색하기</button>
            </form>

    </div>
    <Kakaomap searchPlace={Place} />
    </div>
    </div>
  )
}

export default KakaoMapSearchs