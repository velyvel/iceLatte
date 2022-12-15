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
    title: 'user',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: '음악추천',
    path: '/dashboard/recommendationEx',
    icon: icon('ic_cart'),
  },
  {
    title: '유기동물 조회, 구조',
    path: '/dashboard/recommendation',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
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
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
