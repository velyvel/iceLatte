/*eslint-disable*/

import * as React from 'react';

import { Helmet } from 'react-helmet-async';
import {Link, Outlet} from 'react-router-dom';
import {Carousel} from 'nuka-carousel/lib/carousel';

// @mui
import {Container, Stack, Typography,Grid} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import 'bootstrap/dist/css/bootstrap.css';




// ----------------------------------------------------------------------

export default function DashboardAppPage() {

    const textDiv = {
        paddingLeft: 200,
        margin: "auto",
        top: '50%',
        height:"500px"  ,
        position : "relative"
    }

    const mainDiv = {

        height:"3000px"
    }
    const BreedInfo = {

        height:"600px"
    }


    return (
        <div style={mainDiv}>
            <Helmet>
                <title> CopyCat </title>
            </Helmet>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>


                <AppBar position="relative">
                    <Toolbar>
                        {/* <CameraIcon sx={{ mr: 2 }} /> */}
                        <Typography variant="h6" color="inherit" noWrap>
                            Album layout
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Stack>


            <Container maxWidth="lg">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    🐶 환영합니다 🐱
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    1조 copyCat 프로젝트입니다. <br/>
                    open api 활용하여 강아지, 고양이 종류 검색,<br/>
                    반려견 산책 공원 조회, 병원 조회,
                    유기동물과 보호소 조회를 할 수 있습니다.
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained"><Link to="PetRecommendation/RecommendationDog" style={{textDecoration:'none', color:'white'}}>강아지 종 조회</Link></Button>&nbsp;&nbsp;
                    <Button variant="outlined"><Link to="PetRecommendation/RecommendationSearch"style={{textDecoration:'none'}}>고양이 종 조회</Link></Button>&nbsp;&nbsp;

                </Stack>
                <br/><br/>

                <Outlet />
            </Container>

            <br/><br/><br/>


            <Grid item xs={12} md={6} style={{alignItems:'center'}}>
                <CardActionArea component="a" href="#">
                    <Card sx={{ display: 'flex' }} style={{width:'600px', height:'200px', display:'inline-block'}}>
                        <CardContent sx={{ flex: 1 }}>
                            <Typography component="h2" variant="h5">
                                title
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                               date
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                ddddddd
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            sx={{ width: 160, display: { xs: 'inline-block', sm: 'inline-block' } }}
                            img src="/assets/main_page/haeilSeeWindow.jpeg"
                            alt="dddd"
                        />
                    </Card>
                        <Card sx={{ display: 'flex' }} style={{width:'600px', height:'200px', display:'inline-block', marginLeft:'50px'}}>
                            <CardContent sx={{ flex: 1 }}>
                                <Typography component="h2" variant="h5">
                                    title
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    date
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    ddddddd
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    Continue reading...
                                </Typography>
                            </CardContent>
                            <CardMedia
                                style={{display:'inline-block'}}
                                component="img"
                                sx={{ width: 160, display: { xs: 'inline-block', sm: 'inline-block' } }}
                                img src="/assets/main_page/haeilSeeWindow.jpeg"
                                alt="dddd"
                            />
                        </Card>
                </CardActionArea>

            </Grid>
            


            <br/> <br/> <br/> <br/>


                {/*<Grid item xs={12} sm={6} md={6}>*/}
                {/*    <div style={BreedInfo}>*/}

                {/*        <div style={{padding: 20}}>*/}
                {/*            <button type={"button"} className="btn btn-primary"><Link to="PetRecommendation/RecommendationDog" style={{textDecoration:'none', color:'white'}}>강아지 종 조회</Link></button>&nbsp;&nbsp;*/}
                {/*            <button type={"button"} className="btn btn-primary"><Link to="PetRecommendation/RecommendationSearch" style={{textDecoration:'none', color:'white'}}>고양이 종 조회</Link></button>&nbsp;&nbsp;*/}
                {/*        </div>*/}

                {/*    </div>*/}


                {/*</Grid>*/}




        </div>
    );
}