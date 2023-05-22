import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Bag from './pages/Bag';
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/bag',
    element: <Bag />,
  }
]); 

export default function App()
{
  return(
    <RouterProvider router={ router } />
  );
};