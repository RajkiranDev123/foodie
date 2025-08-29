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
import Profile from './components/Profile'
import SearchPage from './components/SearchPage'
import RestaurantDetail from './components/RestaurantDetail'
import Cart from './components/Cart'
import Restaurant from './admin/Restaurant'
import AddMenu from './admin/AddMenu'
import Orders from './admin/Orders'
import Success from './components/Success'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/search/:text",
        element: <SearchPage />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/admin/restaurant",
        element: <Restaurant />
      },
      {
        path: "/admin/menu",
        element: <AddMenu />
      },
      {
        path: "/admin/orders",
        element: <Orders />
      },
      {
        path: "/order/status",
        element: <Success />
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
    element: <Navbar />,
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
