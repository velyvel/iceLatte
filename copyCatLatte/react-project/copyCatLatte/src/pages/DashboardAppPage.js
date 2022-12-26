import { Helmet } from 'react-helmet-async';
import {Link, Outlet} from 'react-router-dom';
import {Carousel} from 'nuka-carousel/lib/carousel';

// @mui
import {Container, Stack, Typography,Grid} from '@mui/material';


// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  
  const textDiv = {
    paddingLeft: 200,

     top: '50%'
    
  }

  const mainDiv = {
    
    height:"3000px"    
  }

  return (
    <div style={mainDiv}>
      <Helmet>
        <title> CopyCat </title>
      </Helmet>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        
        <Typography variant="h1" gutterBottom>
           CopyCat 메인페이지입니다
        </Typography>
      </Stack>
      <Grid container spacing={12}>
        
          <Grid item xs={12} sm={6} md={6}>
              
                
                <div style={textDiv} >
                <Typography variant="h2" gutterBottom>
                  동물과 행복 사랑을 담아주세요
                </Typography>
                  <p>
                    <br/>
                    동물과 행복 사랑을 담아주세요. 사고뭉치의 의사소통이 서툰 아이들이지만 <br/>항상 당신을 사랑해줄 가족이 될겁니다.
                  </p>
                  <button type={"button"} className="btn btn-primary"><Link to="/dashboard/recommendation/abandoned/abandonedHome" style={{textDecoration:'none', color:'white'}}>유기동물 조회,구조</Link></button>&nbsp;&nbsp;

                </div>
                
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Carousel cellAlign='center' wrapAround='true' >
              <img src={`/copyCatLatte/assets/main_page/59inBag.jpeg`} alt="back-ground"/>
              <img src={`/copyCatLatte/assets/main_page/haeilSeeWindow.jpeg`} alt="back-ground"/>
              <img src={`/copyCatLatte/assets/main_page/tigerInBed.jpeg`} alt="back-ground"/>
              <img src={`/copyCatLatte/assets/main_page/59street.jpeg`} alt="back-ground"/>

            </Carousel>

          </Grid>
          
          <Grid item xs={12} sm={6} md={6}>
             <div style={textDiv}>
                <Typography variant="h2" gutterBottom>
                  종의 특징을 알아보세요!
                </Typography>
                <p>
                    <br/>
                    종마다의 다른 걸 원하고 성격이 다릅니다. 자신에게 맞는 종을 확인해보세요.
                </p>
                
            </div>


          </Grid>
          <Grid item xs={12} sm={6} md={6}>
             <Container>
               
                <div style={{padding: 20}}>
                  <button type={"button"} className="btn btn-primary"><Link to="PetRecommendation/RecommendationDog" style={{textDecoration:'none', color:'white'}}>강아지 종 조회</Link></button>&nbsp;&nbsp;
                  <button type={"button"} className="btn btn-primary"><Link to="PetRecommendation/RecommendationSearch" style={{textDecoration:'none', color:'white'}}>고양이 종 조회</Link></button>&nbsp;&nbsp;
                </div>
            <Outlet />
            </Container>

            
          </Grid>
      </Grid>
     
       


    </div>
  );
}
