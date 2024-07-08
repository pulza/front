import React from 'react';
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyPageLoad = async (pageCompoent: string): Promise<{ Component: React.FC<any> }> => {
  const component = await import(`./${pageCompoent}/index.ts`);

  return { Component: component.default };
};

const router = createBrowserRouter([
  {
    path: '/sign-up',
    lazy: () => lazyPageLoad('SignUpPage'),
  },
]);

const RouterProvider: React.FC = () => {
  return <ReactRouterProvider router={router} />;
};

export { RouterProvider };
