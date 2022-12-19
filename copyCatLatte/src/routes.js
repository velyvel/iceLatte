import {Navigate, useRoutes} from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import BlogSearchPage from './pages/BlogSearchPage';
import LandingPage from './pages/LandingPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import RecommendationExPage from './pages/recommendationExPage';
import RecommendationPage from './pages/recommendationPage';
import DashboardAppPage from './pages/DashboardAppPage';
import AbandonedList from "./abandoned/abandonedList";
import AbandonedInquire from "./abandoned/abandonedInquire";
import AbandonedChart from "./abandoned/abandonedChart";
import ParkInfo from './pages/ParkInfo';

import RecommendationRandom from './PetRecommendation/RecommendationRandom';
import RecommendationSearch from './PetRecommendation/RecommendationSearch';
import AbandonedHome from "./abandoned/abandonedHome";


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage />,
        children: [
          { path: 'PetRecommendation/RecommendationRandom', element: <RecommendationRandom /> },
          { path: 'PetRecommendation/RecommendationSearch', element: <RecommendationSearch /> }

        ] },


        { path: 'recommendationEx', element: <RecommendationExPage /> },
        { path: 'recommendation',
          element: <RecommendationPage />,
          children: [
            { path: 'abandoned/abandonedHome', element: <AbandonedHome /> },
            { path: 'abandoned/abandonedList', element: <AbandonedList /> },
            { path: 'abandoned/abandonedInquire', element: <AbandonedInquire /> },
            { path: 'abandoned/abandonedChart', element: <AbandonedChart /> }

          ]
        },
        { path: 'blog', element: <BlogPage /> },
        { path: 'blogsearch', element: <BlogSearchPage /> },
        { path: 'kakaomap', element: <LandingPage /> },
        { path: 'parkinfo', element: <ParkInfo /> }
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
