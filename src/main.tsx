import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.tsx'
import Timetable from './pages/Timetable.tsx';
import LandingPage from './pages/LandingPage.tsx';
import LoginPage from './pages/Login.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Registration from './pages/Form.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/app",
    element: <App/>,
    children: [
      {
        path: "timetable",
        element: <Timetable/>
      },
      {
        path: "dashboard",
        element: <Dashboard dashboardMode='overview'/>
      },
      {
        path: "form",
        element: <Registration/>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
