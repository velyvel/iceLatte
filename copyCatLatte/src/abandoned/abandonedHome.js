import {useEffect, useRef, useState} from "react";
import styled from 'styled-components';
import {Slide} from "@mui/material";
// ===============================================================================

const TOTAL_SLIDES = 3;
const img1 = <img src="/assets/images/image/1.jpg" alt="..."/>;
const img2 = <img src="/assets/images/image/2.jpg" alt="..."/>;
const img3 = <img src="/assets/images/image/3.jpg" alt="..."/>;

const AbandonedHome = ()=> {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    // Next 버튼 클릭 시
    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }, [currentSlide]);


    return(
        <>
            <Container>
                <Text>
                    <h3>유기동물 관련 페이지입니다</h3>
                    <p>{currentSlide + 1}번 째 사진</p>
                </Text>
                <SliderContainer ref={slideRef}>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/assets/images/image/1.jpg" alt="..." style={{opacity:'30%', borderRadius:'20px'}}/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 style={{color:'darkcyan'}}>유기동물 리스트를 검색</h5>
                                    <p style={{color:'black'}}>유기동물 리스트를 검색할 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                </SliderContainer>
                <Center>
                    <Button onClick={prevSlide}>Prev</Button>
                    <Button onClick={nextSlide}>Next</Button>
                </Center>
            </Container>
        </>
    );
}


const Container = styled.div`
  width: 500px;
  margin: auto;
  height: 1000px;
  overflow: hidden;
`;
const Button = styled.div`
  all: unset;
  padding: 1em 2em;
  margin: 2em 2em;
  color: darkcyan;
  border-radius: 10px;
  border: 1px solid darkcyan;
  cursor: pointer;
  &:hover {
    background-color: darkcyan;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2em;
  display: flex; // 이미지들을 가로로 나열합니다.
`;
const Text = styled.div`
  text-align: center;
  color: darkcyan;
  p {
    color: #fff;
    font-size: 20px;
    background-color: darkcyan;
    display: inline-block;
    border-radius:20px;
    padding: 0.3em 0.7em;
  }
`;
const Center = styled.div`
  text-align: center;
`;
export default AbandonedHome;