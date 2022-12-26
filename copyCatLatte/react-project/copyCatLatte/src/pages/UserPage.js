/*eslint-disable*/


import {Link, Outlet} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// @mui
import {
  
  Stack,
 
  Container,
  Typography
  
  
} from '@mui/material';




export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> 동물 추천 | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            동물 추천
          </Typography>
         
        </Stack>
        
        <div style={{padding: 20}}>
            [<Link to="PetRecommendation/RecommendationDog">강아지 종 조회</Link>]
            [<Link to="PetRecommendation/RecommendationSearch">고양이 종 조회</Link>]
            <hr/>
        </div>

        <Outlet />
        
      </Container>

     
    </>
  );
}