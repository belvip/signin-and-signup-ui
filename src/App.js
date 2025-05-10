import './index.css';
import { ErrorElement } from './components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import {
  HomePage,
  Login,
  Signup,
  LandingPage,
  Error
} from './pages';


// Setup react router
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement : <Error />,
    children: [
      {
        index:true,
        element: <LandingPage />,
        errorElement: <ErrorElement />
      },
      {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorElement />
      },
      {
        path: '/signup',
        element: <Signup />,
        errorElement: <ErrorElement />
      }
    ]
  },
])

function App() {

  return <RouterProvider router={router} />
}

export default App;
