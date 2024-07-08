import React from 'react';
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import CommonErrorPage from '@/page/ErrorPage';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyPageLoad = async (pageCompoent: string): Promise<{ Component: React.FC<any> }> => {
  const component = await import(`./${pageCompoent}`);

  return { Component: component.default };
};

const router = createBrowserRouter([
  {
    path: '/sign-up',
    lazy: () => lazyPageLoad('SignUpPage'),
    errorElement: <CommonErrorPage />,
  },
  {
    path: '/error',
    lazy: () => lazyPageLoad('ErrorPage'),
    errorElement: <CommonErrorPage />,
  },
]);

const RouterProvider: React.FC = () => {
  return <ReactRouterProvider router={router} />;
};

export { RouterProvider };
