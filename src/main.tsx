import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@/page';
import { DevTools } from 'jotai-devtools';
import { Provider } from 'jotai';
import { GlobalEnvUtil } from '@/util/GlobalEnvUtil';
import { store } from '@/store';
import { App } from '@/App';

import '@/styles/global.scss';
import 'jotai-devtools/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {GlobalEnvUtil && <DevTools store={store} />}
      <App>
        <RouterProvider />
      </App>
    </Provider>
  </React.StrictMode>
);
