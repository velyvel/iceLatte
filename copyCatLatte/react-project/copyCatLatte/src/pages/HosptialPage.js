import { Helmet } from 'react-helmet-async';
import SeoulHospital from '../_mock/hospital/SeoulHospital';

// ----------------------------------------------------------------------

export default function HospitalPage() {

  return (
    <>
      <Helmet>
        <title> 동물병원 찾기</title>
      </Helmet>

     <h1>동물병원 찾기</h1>
      <SeoulHospital />
      
    </>
  );
}
