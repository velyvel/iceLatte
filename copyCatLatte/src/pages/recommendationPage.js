import { Helmet } from 'react-helmet-async';
import {Link, Outlet} from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// ----------------------------------------------------------------------

export default function RecommendationPage() {

        return (
            <>
                <Helmet>
                    <title>유기동물 조회 서비스</title>
                </Helmet>
                <Container>
                    <div style={{padding: 20}}>
                        <Link to="/dashboard/recommendation"style={{fontSize:'40px'}}>🏠</Link>&nbsp;&nbsp;
                        <button type={"button"} className="btn btn-primary"><Link to="abandoned/abandonedList" style={{textDecoration:'none', color:'white'}}>유기동물 리스트 보기</Link></button>&nbsp;&nbsp;
                        <button type={"button"} className="btn btn-primary"><Link to="abandoned/abandonedInquire" style={{textDecoration:'none', color:'white'}}>지역별 보호소 조회</Link></button>&nbsp;&nbsp;
                        <button type={"button"} className="btn btn-primary"><Link to="abandoned/abandonedChart"style={{textDecoration:'none', color:'white'}}>지역별 보호소 순위 차트</Link></button>
                        <hr/>
                    </div>
                    <div>
                        <p> 여기에 페이지 설명 들어갈꺼임</p>
                        발표: 라우터 활용하여 페이지 간 이동 만들었음<br/>
                        유기견 페이지 만들어 조회가능 ==> 시, 도 셀렉트박스 만들어서 주소별로 조회할 수 있도록 함<br/>
                        보호소 조회페이지 만들어 근처에 있는 보호소 정보 제공할 수 있도록 함, 지도에 마커 표시하는 작업 연습 중<br/>
                        차트는... 시도중이나 할 수 있으면 할 거임
                    </div>


                    <Outlet/>

                </Container>
            </>
        );
    }
//  }




