import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Stack from './components/Stack.jsx'
import { ToastContainer } from 'react-toastify'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/stack',
        element:<Stack/>
      },
      {
        path:'/project',
        element:<Project/>
      },
      {
        path:'/experience',
        element:<Experience/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer
     position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
 />
  </React.StrictMode>,
)
