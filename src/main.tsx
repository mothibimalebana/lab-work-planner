import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.tsx'
import Timetable from './pages/Timetable.tsx';
import LandingPage from './pages/LandingPage.tsx';
import LoginPage from './pages/Login.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/timetable",
        element: <Timetable/>
      }
    ]
  },
  {
    path: "/home",
    element: <LandingPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
