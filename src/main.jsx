import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout.jsx'
import Home from './components/Home/Home/Home.jsx'
import About from './components/About/About'
import Login from './components/Login/Login/Login'
import Register from './components/Login/Register/Register'
import AuthProvider from './providers/AuthProvider'
import Blog from './components/Blog/Blog'
import PrivateRoutes from './PrivateRoutes'
import ViewRecipeDetails from './components/ViewRecipeDetails/ViewRecipeDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  },
  {
    path: '/:id',
    element : <PrivateRoutes><ViewRecipeDetails></ViewRecipeDetails></PrivateRoutes>,
    loader: ({params}) => fetch(`http://localhost:5000/chef-data/${params.id}`)
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
