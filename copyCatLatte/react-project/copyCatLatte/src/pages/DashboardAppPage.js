import { Helmet } from 'react-helmet-async';
import {Link, Outlet} from 'react-router-dom';
import {Carousel} from 'nuka-carousel/lib/carousel';

// @mui
import {Container, Stack, Typography,Grid} from '@mui/material';
import styled from 'styled-components';

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

    const mainBlock = styled.div`
     p{
     color : red
     }
    `;

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
            
            <mainBlock>{
                <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s"
                                         data-wow-delay="1s">
                                        <h5>환영합니다🐶</h5>
                                        <h2>We Make <em>Digital Ideas</em> &amp; <span>SEO</span> Marketing</h2>
                                        <p>Space Dynamic is a professional looking HTML template using a Bootstrap 5
                                            (beta 2). This CSS template is free for you provided by <a rel="nofollow"
                                                                                                       href="https://templatemo.com/page/1"
                                                                                                       target="_parent">TemplateMo</a>.
                                        </p>
                                        <form id="search" action="#" method="GET">
                                            <fieldset>
                                                <input type="address" name="address" className="email"
                                                       placeholder="Your website URL..." autoComplete="on" required/>
                                            </fieldset>
                                            <fieldset>
                                                <button type="submit" className="main-button">Analyze Site</button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-image wow fadeInRight" data-wow-duration="1s"
                                         data-wow-delay="0.5s">
                                        <img src="/assets/main_page/banner-right-image.png" alt="team meeting"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            </mainBlock>

            <br/> <br/> <br/> <br/>


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
                        <img src={`/assets/main_page/59inBag.jpeg`} alt="back-ground"/>
                        <img src={`/assets/main_page/haeilSeeWindow.jpeg`} alt="back-ground"/>
                        <img src={`/assets/main_page/tigerInBed.jpeg`} alt="back-ground"/>
                        <img src={`/assets/main_page/59street.jpeg`} alt="back-ground"/>

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
                    <div style={BreedInfo}>

                        <div style={{padding: 20}}>
                            <button type={"button"} className="btn btn-primary"><Link to="PetRecommendation/RecommendationDog" style={{textDecoration:'none', color:'white'}}>강아지 종 조회</Link></button>&nbsp;&nbsp;
                            <button type={"button"} className="btn btn-primary"><Link to="PetRecommendation/RecommendationSearch" style={{textDecoration:'none', color:'white'}}>고양이 종 조회</Link></button>&nbsp;&nbsp;
                        </div>
                        <Outlet />
                    </div>


                </Grid>
            </Grid>




        </div>
    );
}