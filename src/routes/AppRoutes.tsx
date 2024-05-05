import { Loadable } from '@components/Loadable';
import AuthLayout from '@layout/AuthLayout';
import MainLayout from '@layout/MainLayout';
import { NoPrivilegesPage } from '@pages/Common/NoPrivileges';
import { NotFoundPage } from '@pages/Common/NotFound';
import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const LoginPage = Loadable(lazy(() => import('@pages/Auth/Login/LoginPage')));
const ForgotPage = Loadable(lazy(() => import('@pages/Auth/Forgot/ForgotPage')));
const DashboardPage = Loadable(lazy(() => import('@pages/Dashboard/DashboardPage')));

export default function AppRoutes() {
  return useRoutes([
    {
      path: 'auth',
      element: <AuthLayout />,
      children: [
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'forgot',
          element: <ForgotPage />,
        },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Navigate to="/dashboard" replace />,
        },
        {
          path: 'dashboard',
          element: <DashboardPage />,
        },
      ],
    },
    { path: '404', element: <NotFoundPage /> },
    { path: 'no-privileges', element: <NoPrivilegesPage /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
