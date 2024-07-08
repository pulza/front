import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@/page';
import { App } from '@/App';

import '@/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <RouterProvider />
    </App>
  </React.StrictMode>
);
