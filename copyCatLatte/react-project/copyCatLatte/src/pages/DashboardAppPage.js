import { Helmet } from 'react-helmet-async';
import {Link, Outlet} from 'react-router-dom';
// @mui
import {Container, Stack, Typography,Grid} from '@mui/material';


// ----------------------------------------------------------------------

export default function DashboardAppPage() {


  return (
    <>
      <Helmet>
        <title> CopyCatLatte </title>
      </Helmet>
     
      <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                <Typography variant="h4" gutterBottom>
                    동물 추천
                </Typography>
            </Stack>
            <div style={{padding: 20}}>
                <button type={"button"} className="btn btn-primary"><Link to="PetRecommendation/RecommendationDog" style={{textDecoration:'none', color:'white'}}>강아지 종 조회</Link></button>&nbsp;&nbsp;
                <button type={"button"} className="btn btn-primary"><Link to="PetRecommendation/RecommendationSearch" style={{textDecoration:'none', color:'white'}}>고양이 종 조회</Link></button>&nbsp;&nbsp;
                <hr/>
            </div>
            <Outlet />

        </Container>
      
       


    </>
  );
}
