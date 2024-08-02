import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'
import Contact from './Contact'
import Portfolio from './Portfolio '
import About from './About'
import Layaute from './Layaute'
import NotFound from './NotFound'
import Home from './Home'



function App() {
  
 let routes = createBrowserRouter([
   
  {path:"",
     element: <Layaute></Layaute>,
       children:[
        {index:true ,element: <Home></Home> },
        {path:'About', element: <About></About>},
        {path:'Portfolio', element: <Portfolio></Portfolio>},
        {path:'Contact', element: <Contact></Contact>},



        {path:'*', element: <NotFound></NotFound>}

    ],
  },
  ]);




  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
