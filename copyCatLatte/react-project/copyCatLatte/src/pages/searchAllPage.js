import { Helmet } from 'react-helmet-async';
import {Link, Outlet} from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// ----------------------------------------------------------------------

export default function SearchAllPage() {

  return (
      <>
        <Helmet>
          <title>모든 검색</title>
        </Helmet>
        <Container>
          <div style={{padding: 20}}>
            <button type={"button"} className="btn btn-primary"><Link to="search/blogSearch" style={{textDecoration:'none', color:'white'}}>블로그 검색</Link></button>&nbsp;&nbsp;
            <button type={"button"} className="btn btn-primary"><Link to="/" style={{textDecoration:'none', color:'white'}}>지도 검색</Link></button>&nbsp;&nbsp;
            <button type={"button"} className="btn btn-primary"><Link to="/"style={{textDecoration:'none', color:'white'}}>ㅁㅁㅁㅁㅁ</Link></button>
            <hr/>
          </div>

          <Outlet/>

        </Container>
      </>
  );
}
//  }




