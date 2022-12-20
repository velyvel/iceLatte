// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: '제목미정(동물 추천)',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: '동물병원 찾기',
    path: '/dashboard/hospital',
    icon: icon('ic_analytics'),
  },
  {
    title: '모든 검색',
    path: '/dashboard/searchAll',
    icon: icon('ic_cart'),
  },
  {
    title: '유기동물 조회, 구조',
    path: '/dashboard/recommendation/abandoned/abandonedHome',
    icon: icon('shelter'),
  },
  {
    title: '블로그 검색',
    path: '/dashboard/blogsearch',
    icon: icon('ic_blog'),
  },
  {
    title: '지도 검색',
    path: '/dashboard/kakaomap',
    icon: icon('ic_blog'),
  },
  {
    title: '공원 조회',
    path: '/dashboard/parkinfo',
    icon: icon('ic_park'),
  },
];

export default navConfig;
