import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ErrorPage, MainPage } from 'src/pages';

export const router = createBrowserRouter([
  {
    element: <MainPage />,
    errorElement: <ErrorPage />,
    path: '',
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
