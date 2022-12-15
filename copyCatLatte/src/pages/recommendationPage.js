import { Helmet } from 'react-helmet-async';
import {Link, Outlet} from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// ----------------------------------------------------------------------

export default function RecommendationPage() {

        return (
            <>
                <Helmet>
                    <title>유기동물 조회 서비스</title>
                </Helmet>
                <Container>
                    <h4>유기동물 조회</h4>
                    <div style={{padding: 20}}>
                        [<Link to="abandoned/abandonedList">List</Link>]
                        [<Link to="abandoned/abandonedInquire">Inquire</Link>]
                        [<Link to="abandoned/abandonedChart">Chart</Link>]
                        <hr/>
                    </div>

                    <Outlet />

                </Container>
            </>
        );
    }
//  }




