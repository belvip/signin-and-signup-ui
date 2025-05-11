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

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  // Simule une attente réseau
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Email:', email);
  return null;
};

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
        errorElement: <ErrorElement />,
        action: loginAction,
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
