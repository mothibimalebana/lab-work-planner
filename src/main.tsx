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
import Form from './pages/Form.tsx';
import { appSchedule } from './assets/mockData.tsx';

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
        element: <Timetable schedule={appSchedule}/>
      },
      {
        path: "dashboard",
        element: <Dashboard dashboardMode='overview'/>
      },
      {
        path: "form",
        element: <Form/>
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
