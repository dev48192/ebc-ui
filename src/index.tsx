import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './app';
import Home from './pages/Home';
import Layout from './components/Layout';
import MaterialDepo from './pages/MaterialDepo';
import NotFound from './pages/NotFound';
import SettingsForm from './pages/Settings';

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: '/',
        Component: Layout,
        children: [
          {
            path: '/',
            Component: Home,
          },
          {
            path: '/material-depo',
            Component: MaterialDepo,
          },
          {
            path: '/settings',
            Component: SettingsForm,
          },
        ],
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
