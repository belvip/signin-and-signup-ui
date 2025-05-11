import './index.css';
import { ErrorElement } from './components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



import {
  HomePage,
  Login,
  Signup,
  LandingPage,
  Error,
  ForgotPassword
} from './pages';


export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  
  // Simule une attente réseau
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Ici, normalement, vous feriez une vérification réelle
  if (email && password) {
    return { success: true };
  }
  return { success: false, error: "Email ou mot de passe invalide" };
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
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
        errorElement: <ErrorElement />,
      }
    ]
  },
])

function App() {

  return <RouterProvider router={router} />
}

export default App;
