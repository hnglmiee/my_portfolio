import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { childRoutes, publicRoutes } from './routes'
import ErrorPage from '~/pages/ErrorPage'

const RouterComponent = ({ backgroundColor, setBackgroundColor }) => {
  const router = createBrowserRouter([
    { path: '/', element: <Navigate to='land' /> },
    {
      path: '/',
      element: <Outlet />, //used in parent route elements to render their child route elements.
      children: publicRoutes.map((item) => {
        const Page = item.component
        return {
          path: item.path,
          loader: item.loader,
          element: <Page backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
        }
      })
    },
    {
      path: '/catalog',
      element: <Outlet />, //used in parent route elements to render their child route elements.
      children: childRoutes['catalog'].map((item) => {
        const Page = item.component
        return {
          path: item.path,
          loader: item.loader,
          element: <Page backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} />
        }
      })
    },
    { path: '*', element: <ErrorPage /> }
  ])

  return <RouterProvider router={router} />
}

export default RouterComponent
