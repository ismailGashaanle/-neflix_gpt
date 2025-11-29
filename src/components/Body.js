
 
import Browse from './Browse'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import React from 'react'
import Login from './Login'

const Body = () => {


    
    const AppRouter=createBrowserRouter([

        {
            path:"/",
            element:<Login/>
        },
        {
            path:"browse",
            element:<Browse/>
        }
    ])
  return (
    <div>
     


<RouterProvider  router={AppRouter} />
 
    
    </div>
  )
}

export default Body
