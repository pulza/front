import React from 'react';
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { SignUp } from '@/feature/SignUp';

const router = createBrowserRouter([
  {
    path: '/sign-up',
    element: <SignUp />,
  },
]);

const RouterProvider: React.FC = () => <ReactRouterProvider router={router} />;

export { RouterProvider };
