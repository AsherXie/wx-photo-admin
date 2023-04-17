import { createBrowserRouter, Route, Link } from 'react-router-dom';

import Login from '@/pages/login';

import App from '@/App';
import Home from '@/pages/home';

const router = createBrowserRouter([
  {
    path: '/',

    element: <App />,

    // loader:

    // action

    // errorElement

    children: [
      {
        path: '/home',
        element: <Home />
      }
    ]
  },

  {
    path: '/login',

    element: <Login />
  }
]);

export default router;
