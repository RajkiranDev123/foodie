import { useState } from 'react'

import './App.css'

import Login from './auth/Login'
import Signup from './auth/Signup'

import MainLayout from './layout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ForgotPassword from './auth/ForgotPassword'
import VerifyEmail from './auth/VerifyEmail'
import ResetPassword from './auth/ResetPassword'
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path:"/",
        element:<HeroSection/>
      }
    ]

  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/n",
    element: <Navbar/>,
  },
])

function App() {



  return (
    <>
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </>
  )
}

export default App
