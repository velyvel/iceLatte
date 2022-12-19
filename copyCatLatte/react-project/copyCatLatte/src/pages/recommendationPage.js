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
                        <Link to="abandoned/abandonedHome"style={{fontSize:'40px'}}>🏠</Link>&nbsp;&nbsp;
                        <button type={"button"} className="btn btn-primary"><Link to="abandoned/abandonedList" style={{textDecoration:'none', color:'white'}}>유기동물 리스트 보기</Link></button>&nbsp;&nbsp;
                        <button type={"button"} className="btn btn-primary"><Link to="abandoned/abandonedInquire" style={{textDecoration:'none', color:'white'}}>지역별 보호소 조회</Link></button>&nbsp;&nbsp;
                        <button type={"button"} className="btn btn-primary"><Link to="abandoned/abandonedChart"style={{textDecoration:'none', color:'white'}}>지역별 보호소 순위 차트</Link></button>
                        <hr/>
                    </div>

                    <Outlet/>

                </Container>
            </>
        );
    }
//  }




