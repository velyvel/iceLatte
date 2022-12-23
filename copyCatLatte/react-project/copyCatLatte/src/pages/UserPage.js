import { Helmet } from 'react-helmet-async';

import {Link, Outlet} from 'react-router-dom';

// @mui
import {
  
  Stack,
 
  Container,
  Typography
  
  
} from '@mui/material';
// components
import Label from '../components/label';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';



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
        <button type={"button"} className="btn btn-primary"><Link to="PetRecommendation/RecommendationDog" style={{textDecoration:'none', color:'white'}}>강아지 종 조회</Link></button>&nbsp;&nbsp;
        <button type={"button"} className="btn btn-primary"><Link to="PetRecommendation/RecommendationSearch" style={{textDecoration:'none', color:'white'}}>고양이 종 조회</Link></button>&nbsp;&nbsp;

          
            <hr/>
        </div>

        <Outlet />
        
      </Container>

     
    </>
  );
}