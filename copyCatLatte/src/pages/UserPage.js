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
            [<Link to="PetRecommendation/RecommendationRandom">랜덤조회</Link>]
            [<Link to="PetRecommendation/RecommendationSearch">검색</Link>]
            <hr/>
        </div>

        <Outlet />
        
      </Container>

     
    </>
  );
}