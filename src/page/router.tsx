import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CommonErrorPage from '@/page/ErrorPage';
import { App } from '@/App';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyPageLoad = async (pageCompoent: string): Promise<{ Component: React.FC<any> }> => {
  const component = await import(`./${pageCompoent}`);

  return { Component: component.default };
};

export const routers: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
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
      {
        path: '/sign-in',
        lazy: () => lazyPageLoad('SignInPage'),
        errorElement: <CommonErrorPage />,
      },
    ],
  },
]);

export default routers;
