/*eslint-disable*/

import * as React from 'react';

import {Helmet} from 'react-helmet-async';
import {Link, Outlet} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


// @mui
import {Container, Stack, Typography, Grid} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './search.css';



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
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>


                <AppBar position="relative" style={{backgroundColor: 'lightcoral'}}>
                    <Toolbar>
                        {/* <CameraIcon sx={{ mr: 2 }} /> */}
                        <Typography variant="h6" color="inherit" noWrap>
                            copyCat๐ฑ
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Stack>
            {/*  search bar  */}
            <div className="search__container" style={{ margin:'0 auto'}}>
                <h1 className="search__title" style={{fontSize:'25pt'}}>๐ถ ํ์ํฉ๋๋ค ๐ฑ</h1>
                <input className="search__input" type="text" placeholder="Search" style={{width:'50%',  marginLeft:'400px'}}/>
            </div>
            <br/><br/>


            <Container maxWidth="lg">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                />

                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    1์กฐ copyCat ํ๋ก์?ํธ์๋๋ค. <br/>
                    open api ํ์ฉํ์ฌ ๊ฐ์์ง, ๊ณ?์์ด ์ข๋ฅ ๊ฒ์,<br/>
                    ๋ฐ๋?ค๊ฒฌ ์ฐ์ฑ ๊ณต์ ์กฐํ, ๋ณ์ ์กฐํ,
                    ์?๊ธฐ๋๋ฌผ๊ณผ ๋ณดํธ์ ์กฐํ๋ฅผ ํ? ์ ์์ต๋๋ค.
                </Typography>
                <Stack
                    sx={{pt: 4}}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained" style={{backgroundColor: 'lightcoral'}}><Link
                        to="PetRecommendation/RecommendationDog" style={{textDecoration: 'none', color: 'white'}}>๊ฐ์์ง ์ข
                        ์กฐํ</Link></Button>&nbsp;&nbsp;
                    <Button variant="outlined"><Link to="PetRecommendation/RecommendationSearch"
                                                     style={{textDecoration: 'none', color: 'lightcoral'}}>๊ณ?์์ด ์ข
                        ์กฐํ</Link></Button>&nbsp;&nbsp;

                </Stack>
                <br/><br/>

                <Outlet/>
            </Container>

            <br/><br/><br/>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/images/image/carosel3.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/images/image/carosel2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>1์กฐ ๋ฆฌ์กํธ ํ๋ก์?ํธ์๋๋ค</h3>
                            <p>๋ฐ๋?ค๊ฒฌ๊ณผ ๊ด๋?จ๋ ์?๋ณด ํ๋ก์?ํธ์๋๋ค</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="/assets/images/image/carosel1.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>1์กฐ ๋ฆฌ์กํธ ํ๋ก์?ํธ์๋๋ค</h3>
                            <p>๋ฐ๋?ค๊ฒฌ๊ณผ ๊ด๋?จ๋ ์?๋ณด ํ๋ก์?ํธ์๋๋ค</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
            );
            }