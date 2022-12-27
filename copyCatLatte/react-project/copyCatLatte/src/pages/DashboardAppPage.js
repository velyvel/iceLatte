/*eslint-disable*/

import * as React from 'react';

import {Helmet} from 'react-helmet-async';
import {Link, Outlet} from 'react-router-dom';
import {Carousel} from 'nuka-carousel/lib/carousel';

// @mui
import {Container, Stack, Typography, Grid} from '@mui/material';
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
        height: "500px",
        position: "relative"
    }

    const mainDiv = {

        height: "3000px"
    }
    const BreedInfo = {

        height: "600px"
    }


    return (
        <div style={mainDiv}>
            <Helmet>
                <title> CopyCat </title>
            </Helmet>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>


                <AppBar position="relative" style={{backgroundColor: 'lightcoral'}}>
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
                    sx={{pt: 4}}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained" style={{backgroundColor: 'lightcoral'}}><Link
                        to="PetRecommendation/RecommendationDog" style={{textDecoration: 'none', color: 'white'}}>강아지 종
                        조회</Link></Button>&nbsp;&nbsp;
                    <Button variant="outlined"><Link to="PetRecommendation/RecommendationSearch"
                                                     style={{textDecoration: 'none', color: 'lightcoral'}}>고양이 종
                        조회</Link></Button>&nbsp;&nbsp;

                </Stack>
                <br/><br/>

                <Outlet/>
            </Container>

            <br/><br/><br/>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/assets/main_page/59inBag.jpeg" className="d-block w-100" alt="..." style={{height:'500px'}}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h3> 반려동물 관련  페이지</h3>
                                <p>api 활용하여 만들었습니다</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
            }