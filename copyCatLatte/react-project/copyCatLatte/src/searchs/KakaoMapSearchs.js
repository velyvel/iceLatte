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


          <div className="search__container" style={{width:'100%'}} >
              <h1 className="search__title" style={{fontSize:'20pt'}}>πΆ μ§λ κ²μ π±</h1>
            <form className="inputForm" onSubmit={handleSubmit}>
              <input type="search" style={{backgroundColor:'lightgrey'}} placeholder="κ²μμ΄λ₯Ό μλ ₯ νμΈμ" name="query" className="search__input"
                     onChange={onChange} value={InputText}
                    />
            </form>
              <br/>
    </div>
          <br/><hr/><br/>
    <Kakaomap searchPlace={Place} />
    </div>
    </div>
  )
}

export default KakaoMapSearchs