import {Navigate, useRoutes} from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import RecommendationExPage from './pages/recommendationExPage';
import RecommendationPage from './pages/recommendationPage';
import DashboardAppPage from './pages/DashboardAppPage';
import Playlist from './pages/Playlist';
import AbandonedList from "./abandoned/abandonedList";
import AbandonedInquire from "./abandoned/abandonedInquire";
import AbandonedChart from "./abandoned/abandonedChart";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'recommendationEx', element: <RecommendationExPage /> },
        { path: 'recommendation',
          element: <RecommendationPage />,
          children: [
            { path: 'abandoned/abandonedList', element: <AbandonedList /> },
            { path: 'abandoned/abandonedInquire', element: <AbandonedInquire /> },
            { path: 'abandoned/abandonedChart', element: <AbandonedChart /> }

          ]
        },
        { path: 'blog', element: <BlogPage /> },
        { path: 'playlist', element: <Playlist /> },
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
