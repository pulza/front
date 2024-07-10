import React from 'react';
import ReactDOM from 'react-dom/client';
import { DevTools } from 'jotai-devtools';
import { Provider } from 'jotai';
import { GlobalEnvUtil } from '@/util/GlobalEnvUtil';
import { routers } from '@/page';
import { store } from '@/store';

import '@/styles/global.scss';
import 'jotai-devtools/styles.css';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {GlobalEnvUtil.DEV_MODE && <DevTools store={store} />}
      <RouterProvider router={routers} />
    </Provider>
  </React.StrictMode>
);
