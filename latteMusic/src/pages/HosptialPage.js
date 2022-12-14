import { Helmet } from 'react-helmet-async';

import Hospital from '../_mock/hospital';

// ----------------------------------------------------------------------

export default function HospitalPage() {

  return (
    <>
      <Helmet>
        <title> 주변동물병원 검색하기</title>
      </Helmet>

     <h1>주병동물병원 검색하기</h1>

      <Hospital />
    </>
  );
}
