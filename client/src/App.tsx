import { useState } from 'react'

import './App.css'

import Login from './auth/Login'
import Signup from './auth/Signup'

import MainLayout from './MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }
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
