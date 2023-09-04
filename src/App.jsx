import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Cities from './pages/Cities'
import Compoenete404 from './pages/Componente404'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetailsCities from './pages/DetailCities'

const router = createBrowserRouter([
  {
    path: '/citie/:_id',
    element: <DetailsCities />
  },

  {

    path: '/',
    element: <>
      <Header />
      <Footer />
    </>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cities',
        element: <Cities />
      },
      {
        path: '*',
        element: <Compoenete404 />
      }
    ],

  }
])

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
